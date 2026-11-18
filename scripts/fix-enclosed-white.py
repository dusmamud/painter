#!/usr/bin/env python3
"""Remove enclosed near-white regions from a cutout (e.g. the background
showing through a bucket handle loop) while keeping the largest bright
region (a white t-shirt). Only touches pixels that are currently opaque
and very bright, are NOT connected to the image border through bright
pixels, and belong to a component larger than --min-area (both gaps in
the hero painter cutout were 8k+ px; the next-largest enclosed component
was 19px, so the threshold is not sensitive). T-shirt highlights were
NOT enclosed at lum 248 in practice, so no keep-largest exception: every
enclosed bright component above --min-area is background showing through.

Usage: fix-enclosed-white.py <src-rgba> <dst> [--lum 248] [--min-area 50]
"""
import argparse

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dst")
    ap.add_argument("--lum", type=int, default=248)
    ap.add_argument("--min-area", type=int, default=50)
    args = ap.parse_args()

    im = Image.open(args.src).convert("RGBA")
    arr = np.array(im)
    lum = np.array(im.convert("RGB").convert("L"))
    alpha = arr[:, :, 3]
    bright = (lum >= args.lum) & (alpha == 255)

    # Holes in the non-bright background = bright regions fully enclosed
    # by darker pixels (t-shirt, handle-loop gap, paint flecks, ...).
    enclosed = ndimage.binary_fill_holes(~bright) & bright
    labels, n = ndimage.label(enclosed)
    total = bright.size
    areas = sorted(
        ((int((labels == i).sum()), i) for i in range(1, n + 1)), reverse=True
    )
    print(f"enclosed bright components: {len(areas)}")
    for area, i in areas[:8]:
        print(f"  component {i}: {area}px ({100 * area / total:.2f}%)")
    if not areas:
        print("nothing enclosed; no change")
        im.save(args.dst)
        return
    largest = areas[0][1]
    remove = np.zeros_like(enclosed)
    removed_count = 0
    for area, i in areas:
        if area >= args.min_area:
            remove |= labels == i
            removed_count += 1
    print(f"removing {int(remove.sum())}px across {removed_count} components")
    new_alpha = np.where(remove, 0, alpha).astype(np.uint8)
    a_img = Image.fromarray(new_alpha, "L").filter(ImageFilter.GaussianBlur(0.5))
    arr[:, :, 3] = np.array(a_img)
    Image.fromarray(arr, "RGBA").save(args.dst, optimize=True)
    print(f"saved {args.dst}")


if __name__ == "__main__":
    main()
