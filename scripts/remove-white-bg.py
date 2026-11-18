#!/usr/bin/env python3
"""Remove a uniform near-white background -> transparent PNG (RGBA).

Flood-fills from the image corners on the luminance channel (so only
background connected to the border is removed — a white t-shirt enclosed
by the subject survives), then erodes the alpha by 1px, feathers it
slightly, and un-multiplies edge pixels from white so no white fringe
shows when the cutout sits on a coloured background. Trims to content.

Usage: remove-white-bg.py <src> <dst> [--thresh 14] [--no-trim]
"""
import argparse
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


def remove_white(src, dst, thresh=14, trim=True):
    rgb = Image.open(src).convert("RGB")
    lum = rgb.convert("L")
    w, h = lum.size
    # Flood-fill the BACKGROUND on the luminance image: paint bg pixels 0.
    # ImageDraw.floodfill thresholds against the seed pixel, so seed only
    # from corners that are actually near-white.
    seeds = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
    filled = False
    work = lum.copy()
    for x, y in seeds:
        if lum.getpixel((x, y)) >= 242:
            ImageDraw.floodfill(work, (x, y), 0, thresh=thresh)
            filled = True
    if not filled:
        print("no near-white corner found; refusing to guess", file=sys.stderr)
        return False
    bg = np.array(work) == 0
    alpha = np.where(bg, 0, 255).astype(np.uint8)
    a_img = Image.fromarray(alpha, "L")
    # Erode 1px to kill the anti-aliased white fringe, then feather.
    a_img = a_img.filter(ImageFilter.MinFilter(3))
    a_img = a_img.filter(ImageFilter.GaussianBlur(0.6))
    alpha = np.array(a_img).astype(np.float32) / 255.0
    # Un-multiply from white: observed = fg*a + 255*(1-a)  =>  fg = (obs - 255*(1-a))/a
    arr = np.array(rgb).astype(np.float32)
    a3 = alpha[:, :, None]
    with np.errstate(divide="ignore", invalid="ignore"):
        fg = np.where(a3 > 0.02, (arr - 255.0 * (1.0 - a3)) / np.maximum(a3, 0.02), arr)
    fg = np.clip(fg, 0, 255).astype(np.uint8)
    out = np.dstack([fg, (alpha * 255).astype(np.uint8)])
    result = Image.fromarray(out, "RGBA")
    if trim:
        bbox = a_img.point(lambda p: 255 if p > 8 else 0).getbbox()
        if bbox:
            pad = 8
            box = (max(0, bbox[0] - pad), max(0, bbox[1] - pad),
                   min(w, bbox[2] + pad), min(h, bbox[3] + pad))
            result = result.crop(box)
    result.save(dst, optimize=True)
    print(f"{src} -> {dst}: {result.size} RGBA")
    return True


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dst")
    ap.add_argument("--thresh", type=int, default=14)
    ap.add_argument("--no-trim", action="store_true")
    args = ap.parse_args()
    ok = remove_white(args.src, args.dst, thresh=args.thresh, trim=not args.no_trim)
    sys.exit(0 if ok else 1)
