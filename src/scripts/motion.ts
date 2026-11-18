// Motion + interactions: Lenis smooth scroll, GSAP reveals and
// count-ups, header shadow, back-to-top, toast, FAQ accordion, project
// filter, and mailto forms. Everything animated lives behind the
// prefers-reduced-motion guard; reveals default to visible and
// gsap.from() only hides content once GSAP actually runs.
//
// The whole body is guarded by a window check: Layout imports this file
// in frontmatter, so it also executes during static prerendering where
// browser APIs do not exist.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== 'undefined') {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis: Lenis | null = null;

  if (!reduced) {
    lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis?.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
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
  }

  // Header shadow + back-to-top visibility.
  const header = document.getElementById('site-header');
  const toTop = document.getElementById('to-top');
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('shadow-md', y > 8);
    if (toTop) {
      const show = y > 600;
      toTop.classList.toggle('opacity-0', !show);
      toTop.classList.toggle('pointer-events-none', !show);
    }
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
