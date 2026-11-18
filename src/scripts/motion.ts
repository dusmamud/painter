// Motion + interactions: Lenis smooth scroll, GSAP hero timeline
// (SplitText) + reveals + count-ups + parallax, header behavior, scroll
// progress, back-to-top, toast, FAQ accordion, project filter, before/
// after sliders, testimonial slider, sticky CTA, and mailto forms.
// Everything animated lives behind the prefers-reduced-motion guard;
// reveals default to visible and gsap.from() only hides content once
// GSAP actually runs, so no-JS stays readable.
//
// Loaded via a <script> tag import in Layout.astro — a frontmatter
// import would only execute at build time and never reach the browser.
// The window guard below is kept as defense in depth.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

if (typeof window !== 'undefined') {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis: Lenis | null = null;

  if (!reduced) {
    lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis?.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Hero entrance: SplitText line reveal for the headline, then the
    // supporting elements and the visual composition. Waits for fonts
    // (with a timeout race) so line splits match the rendered type.
    const heroTitle = document.querySelector<HTMLElement>('[data-hero-title]');
    if (heroTitle) {
      const runHero = () => {
        const split = new SplitText(heroTitle, { type: 'lines', mask: 'lines' });
        const ctas = gsap.utils.toArray<HTMLElement>('[data-hero-cta]');
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from(split.lines, { yPercent: 110, duration: 0.9, stagger: 0.12 })
          .from('[data-hero-eyebrow]', { y: 14, opacity: 0, duration: 0.6 }, 0)
          .from('[data-hero-sub]', { y: 18, opacity: 0, duration: 0.7 }, 0.25)
          .from(ctas[0], { y: 18, opacity: 0, duration: 0.7 }, 0.4)
          .from(ctas[1], { y: 18, opacity: 0, duration: 0.7 }, 0.5)
          .from('[data-hero-trust]', { y: 14, opacity: 0, duration: 0.6 }, 0.55)
          .from('[data-hero-visual]', { opacity: 0, scale: 0.96, duration: 1 }, 0.2)
          .from('[data-hero-badge]', { y: 16, opacity: 0, scale: 0.85, duration: 0.6, ease: 'back.out(1.8)' }, 0.8);
      };
      const fontsReady = (document as Document).fonts?.ready ?? Promise.resolve();
      Promise.race([fontsReady, new Promise((r) => setTimeout(r, 900))]).then(runHero);
    }

    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
      if (el.closest('[data-hero]')) return;
      gsap.from(el, {
        y: 26,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: parseFloat(el.dataset.delay ?? '0'),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
      const target = parseFloat(el.dataset.count ?? '0');
      const suffix = el.dataset.suffix ?? '';
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.v)}${suffix}`;
        },
      });
    });

    // Gentle parallax on decorative layers (data-parallax="yPercent").
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      gsap.to(el, {
        yPercent: parseFloat(el.dataset.parallax ?? '10'),
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    // Magnetic buttons on fine pointers only.
    if (window.matchMedia('(pointer: fine)').matches) {
      gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
        const strength = 0.25;
        el.addEventListener('mousemove', (e) => {
          const r = el.getBoundingClientRect();
          gsap.to(el, {
            x: (e.clientX - (r.left + r.width / 2)) * strength,
            y: (e.clientY - (r.top + r.height / 2)) * strength,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
        el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' }));
      });
    }
  }

  // Header shadow + hide-on-scroll + back-to-top + scroll progress.
  const header = document.getElementById('site-header');
  const toTop = document.getElementById('to-top');
  const progress = document.getElementById('scroll-progress');
  const mobileMenu = document.getElementById('mobile-menu');
  const morePanel = document.getElementById('more-panel');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('shadow-md', y > 8);
    if (toTop) {
      const show = y > 600;
      toTop.classList.toggle('opacity-0', !show);
      toTop.classList.toggle('pointer-events-none', !show);
    }
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    }
    const menusOpen = !(mobileMenu?.classList.contains('hidden') ?? true) || !(morePanel?.classList.contains('invisible') ?? true);
    if (header && !menusOpen) {
      if (y > 320 && y > lastY + 5) header.classList.add('header-hidden');
      else if (y < lastY - 5 || y < 320) header.classList.remove('header-hidden');
    }
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop?.addEventListener('click', () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });

  // Toast helper, used by the forms.
  const toast = document.getElementById('toast');
  let toastTimer: number | undefined;
  (window as unknown as { showToast: (msg: string) => void }).showToast = (msg: string) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('translate-y-24', 'opacity-0');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.add('translate-y-24', 'opacity-0'), 3500);
  };

  // Sticky mobile CTA: hide while a conversion section or the footer
  // is on screen, so it never covers the real buttons.
  const stickyCta = document.getElementById('sticky-cta');
  const hideTargets = document.querySelectorAll('[data-hide-sticky]');
  if (stickyCta && hideTargets.length > 0 && 'IntersectionObserver' in window) {
    const intersecting = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        });
        stickyCta.classList.toggle('translate-y-full', intersecting.size > 0);
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    hideTargets.forEach((t) => io.observe(t));
  }

  // FAQ accordion (single-open per group).
  document.querySelectorAll<HTMLElement>('[data-faq-group]').forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-faq-item]');
    items.forEach((item) => {
      const btn = item.querySelector<HTMLButtonElement>('[data-faq-btn]');
      const panel = item.querySelector<HTMLElement>('[data-faq-panel]');
      const icon = item.querySelector<HTMLElement>('[data-faq-icon]');
      btn?.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        items.forEach((other) => {
          other.querySelector('[data-faq-btn]')?.setAttribute('aria-expanded', 'false');
          other.querySelector<HTMLElement>('[data-faq-panel]')?.classList.replace('grid-rows-[1fr]', 'grid-rows-[0fr]');
          other.querySelector<HTMLElement>('[data-faq-icon]')?.classList.remove('rotate-45');
        });
        btn.setAttribute('aria-expanded', String(!open));
        panel?.classList.replace('grid-rows-[0fr]', 'grid-rows-[1fr]');
        if (!open) icon?.classList.add('rotate-45');
      });
    });
  });

  // Project filter.
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('[data-filter-btn]');
  const cards = document.querySelectorAll<HTMLElement>('[data-category]');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filterBtn ?? 'All';
      filterBtns.forEach((b) => {
        const active = b === btn;
        b.setAttribute('aria-pressed', String(active));
        b.classList.toggle('bg-navy', active);
        b.classList.toggle('text-white', active);
        b.classList.toggle('bg-white', !active);
        b.classList.toggle('text-muted', !active);
      });
      cards.forEach((card) => {
        const show = filter === 'All' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
        if (show && !reduced) gsap.from(card, { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' });
      });
    });
  });

  // Before/after sliders: a real range input drives the clip + handle.
  document.querySelectorAll<HTMLElement>('[data-ba]').forEach((root) => {
    const range = root.querySelector<HTMLInputElement>('[data-ba-range]');
    const before = root.querySelector<HTMLElement>('[data-ba-before]');
    const handle = root.querySelector<HTMLElement>('[data-ba-handle]');
    range?.addEventListener('input', () => {
      const v = Number(range.value);
      if (before) before.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
      if (handle) handle.style.left = `${v}%`;
    });
  });

  // Testimonial sliders: scroll-snap track + buttons + dots +
  // auto-advance (paused on hover/focus, off for reduced motion).
  // Without JS the track still swipes natively.
  document.querySelectorAll<HTMLElement>('[data-tslider]').forEach((root) => {
    const track = root.querySelector<HTMLElement>('[data-ts-track]');
    const prev = root.querySelector<HTMLButtonElement>('[data-ts-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-ts-next]');
    const dotsWrap = root.querySelector<HTMLElement>('[data-ts-dots]');
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const step = () => (first ? first.offsetWidth + 24 : track.clientWidth);
    const behavior: ScrollBehavior = reduced ? 'auto' : 'smooth';
    const pages = () => Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth));
    const page = () => Math.min(pages() - 1, Math.round(track.scrollLeft / track.clientWidth));

    const paintDots = () => {
      if (!dotsWrap) return;
      const n = pages();
      const active = page();
      dotsWrap.innerHTML = '';
      for (let i = 0; i < n; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Go to testimonial page ${i + 1}`);
        dot.className = `h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-sun-deep' : 'w-2.5 bg-line'}`;
        dot.addEventListener('click', () => track.scrollTo({ left: i * track.clientWidth, behavior }));
        dotsWrap.appendChild(dot);
      }
    };
    let raf = 0;
    track.addEventListener('scroll', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(paintDots);
    }, { passive: true });
    window.addEventListener('resize', paintDots);
    paintDots();

    prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior }));
    next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior }));

    if (!reduced) {
      let timer: number | undefined;
      const start = () => {
        timer = window.setInterval(() => {
          const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
          if (atEnd) track.scrollTo({ left: 0, behavior });
          else track.scrollBy({ left: step(), behavior });
        }, 6000);
      };
      const stop = () => window.clearInterval(timer);
      start();
      root.addEventListener('pointerenter', stop);
      root.addEventListener('pointerleave', start);
      root.addEventListener('focusin', stop);
      root.addEventListener('focusout', start);
    }
  });

  // Mailto forms: validate, then open the visitor's email app with a
  // prefilled message. Nothing is sent from the site itself (demo).
  document.querySelectorAll<HTMLFormElement>('[data-mailto-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[required]');
      let firstInvalid: HTMLElement | null = null;
      fields.forEach((f) => {
        const valid = f.checkValidity() && f.value.trim() !== '';
        f.classList.toggle('ring-2', !valid);
        f.classList.toggle('ring-red-500', !valid);
        f.setAttribute('aria-invalid', String(!valid));
        if (!valid && !firstInvalid) firstInvalid = f;
      });
      if (firstInvalid) {
        (firstInvalid as HTMLElement).focus();
        return;
      }
      const data = new FormData(form);
      const subject = String(data.get('subject') ?? form.dataset.subject ?? 'Website enquiry');
      const lines: string[] = [];
      data.forEach((value, key) => {
        if (key === 'subject') return;
        lines.push(`${key}: ${value}`);
      });
      const to = form.dataset.mailto ?? 'hello@painter.com';
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      (window as unknown as { showToast: (msg: string) => void }).showToast(
        'Thanks! Your email app will open with your message ready to send.',
      );
      form.reset();
    });
  });
}
