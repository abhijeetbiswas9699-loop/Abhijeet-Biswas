/* The Salon Vibe · interactions & motion */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP = window.gsap && window.ScrollTrigger && !reduce;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

if (hasGSAP) {
  document.documentElement.classList.add('anim');
  gsap.registerPlugin(ScrollTrigger);
}

/* ── smooth scroll ── */
let lenis = null;
if (window.Lenis && !reduce) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  if (hasGSAP) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
}
const scrollToEl = el => lenis ? lenis.scrollTo(el, { offset: -70 }) : el.scrollIntoView({ behavior: 'smooth' });

/* ── split headings into words for reveal ── */
function split(el) {
  const out = [];
  [...el.childNodes].forEach(node => {
    if (node.nodeType === 3) {
      node.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { out.push(document.createTextNode(' ')); return; }
        out.push(wrap(document.createTextNode(part)));
      });
    } else if (node.nodeName === 'BR') {
      out.push(node);
    } else {
      out.push(wrap(node.cloneNode(true)));
    }
  });
  el.replaceChildren(...out);
  function wrap(n) { const w = document.createElement('span'); w.className = 'w'; const i = document.createElement('span'); i.append(n); w.append(i); return w; }
}
if (hasGSAP) $$('[data-split]').forEach(split);

/* ── preloader → hero intro ── */
document.body.classList.add('is-loading');
let introDone = false;
function intro() {
  if (introDone) return; introDone = true;
  $('#loader').classList.add('is-done');
  document.body.classList.remove('is-loading');
  if (!hasGSAP) return;
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: .35 });
  tl.to('.hero__title .line > span', { y: 0, duration: 1.6, stagger: .12 })
    .to('[data-hero]', { opacity: 1, duration: 1.2, stagger: .08 }, 0)
    .from('.hero__copy .eyebrow, .hero__tag, .hero__cta', { y: 30, duration: 1.4, stagger: .1 }, .2)
    .from('.hero__video', { scale: 1.15, duration: 2.6, ease: 'power3.out' }, 0)
    .from('.hero__copy', { y: 50, opacity: 0, duration: 1.4 }, .1)
    .from('.hero__logo', { scale: 0, rotate: -120, opacity: 0, duration: 1.6, ease: 'back.out(1.6)' }, .7)
    .from('.badge', { scale: 0, rotate: -120, opacity: 0, duration: 1.6, ease: 'back.out(1.5)' }, .5)
    .add(countUp, .6);
}
addEventListener('load', () => setTimeout(intro, 900));
setTimeout(intro, 3500); // safety net on slow networks

/* ── counters ── */
function countUp(scope = document) {
  $$('[data-count]', scope).forEach(el => {
    if (el.dataset.done) return; el.dataset.done = 1;
    const end = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0;
    if (!hasGSAP) return;
    const o = { v: 0 };
    gsap.to(o, { v: end, duration: 2.2, ease: 'power3.out', onUpdate: () => { el.textContent = o.v.toFixed(dec); } });
  });
}

/* ── nav ── */
const nav = $('#nav'), toggle = $('#navToggle');
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  nav.classList.toggle('is-scrolled', y > 40);
  nav.classList.toggle('is-hidden', y > lastY && y > 500 && !nav.classList.contains('is-open'));
  lastY = y;
}, { passive: true });
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
  open ? lenis?.stop() : lenis?.start();
});
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const href = a.getAttribute('href'), target = $(href);
  if (!target) return;
  e.preventDefault();
  nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', false); lenis?.start();
  // every "Book" button opens the booking form straight away in a pop-up, no scrolling
  if (href === '#booking') { openBooking(a.dataset.service); return; }
  scrollToEl(target);
}));

/* ── hero badge: snipping scissors drop hair strands; badge drifts with the mouse ── */
const snips = $('#snips');
const bladeA = $('.blade--a');
if (bladeA && !reduce) {
  const snip = () => {
    if (document.hidden) return;
    for (let i = 0; i < 3; i++) {
      const h = document.createElement('i');
      h.style.left = `${46 + Math.random() * 10}%`;
      h.style.top = `${30 + Math.random() * 6}%`;
      h.style.setProperty('--dx', `${(Math.random() - .5) * 120}px`);
      h.style.setProperty('--r0', `${Math.random() * 90 - 45}deg`);
      h.style.setProperty('--r1', `${Math.random() * 360 - 180}deg`);
      h.style.animationDelay = `${i * 60}ms`;
      snips.append(h);
      setTimeout(() => h.remove(), 2600);
    }
  };
  bladeA.addEventListener('animationiteration', () => setTimeout(snip, 680));
  setTimeout(snip, 680);
}
if (fine && hasGSAP) {
  const bx = gsap.quickTo('.badge', 'x', { duration: 1.4, ease: 'power3' }), by = gsap.quickTo('.badge', 'y', { duration: 1.4, ease: 'power3' });
  $('#hero').addEventListener('mousemove', e => { bx((e.clientX / innerWidth - .5) * -40); by((e.clientY / innerHeight - .5) * -40); });
}

/* ── one-shot reveals: IntersectionObserver (robust to jumps, anchor links & fast flicks) ── */
const pending = new Map();
const fire = el => { const fn = pending.get(el); if (fn) { pending.delete(el); fn(el); } };
const onView = (els, fn, margin = '0px 0px -8% 0px') => {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); fire(e.target); } }), { rootMargin: margin });
  els.forEach(el => { pending.set(el, fn); io.observe(el); });
};
// safety sweep: a fast flick can skip past an element between frames; reveal anything already scrolled by
let lastSweep = 0, sweepTimer;
const sweep = () => { lastSweep = Date.now(); pending.forEach((_, el) => { if (el.getBoundingClientRect().top < innerHeight * .9) fire(el); }); };
addEventListener('scroll', () => {
  if (!pending.size) return;
  clearTimeout(sweepTimer);
  if (Date.now() - lastSweep > 120) sweep(); else sweepTimer = setTimeout(sweep, 120);
}, { passive: true });

if (hasGSAP) {
  // headings: word-by-word rise
  $$('[data-split]').forEach(h => {
    const words = $$('.w > span', h);
    gsap.set(words, { yPercent: 110 });
    onView([h], () => gsap.to(words, { yPercent: 0, duration: 1.4, ease: 'expo.out', stagger: .06 }));
  });
  // generic reveal (CSS transition, staggered within each batch)
  onView($$('[data-reveal]'), el => {
    const sibs = [...el.parentElement.children].filter(c => c.hasAttribute('data-reveal'));
    el.style.transitionDelay = `${Math.min(sibs.indexOf(el), 5) * 90}ms`;
    el.classList.add('is-in');
    setTimeout(() => { el.style.transitionDelay = ''; }, 1600);
    countUp(el);
  });
  // service cards rise in
  onView($$('.svc'), el => el.classList.add('is-in'), '0px 0px -4% 0px');
  // review bars fill in
  onView($$('.bars'), el => gsap.from($$('.bar i', el), { scaleX: 0, duration: 1.6, ease: 'expo.out', stagger: .1 }));
  // gallery tiles: curtain reveal
  onView($$('.gi'), el => el.classList.add('is-in'), '0px 0px -6% 0px');
  // before/after: sweep hint when first seen
  onView($$('.ba__frame'), f => {
    const input = $('input', f), st = { p: 88 };
    gsap.fromTo(st, { p: 88 }, { p: 50, duration: 2, ease: 'expo.inOut', onUpdate: () => { f.style.setProperty('--pos', st.p + '%'); input.value = st.p; } });
  }, '0px 0px -25% 0px');

  // hero parallax out
  gsap.to('.hero__video', { yPercent: 12, scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero__copy', { yPercent: -12, opacity: .3, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // gallery: tiles drift at slightly different speeds (tablet & up)
  gsap.matchMedia().add('(min-width: 600px)', () => {
    $$('.gi').forEach((g, i) => gsap.fromTo(g, { y: [30, -20, 50][i % 3] }, { y: [-30, 20, -50][i % 3], ease: 'none', scrollTrigger: { trigger: g, start: 'top bottom', end: 'bottom top', scrub: true } }));
  });
  // lazy images change layout: re-measure scroll triggers as they arrive
  let rt; $$('img').forEach(i => i.complete || i.addEventListener('load', () => { clearTimeout(rt); rt = setTimeout(() => ScrollTrigger.refresh(), 150); }));
  // footer wordmark
  gsap.from('.footer__word', { xPercent: 12, ease: 'none', scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: true } });
  addEventListener('load', () => ScrollTrigger.refresh());
}

/* ── before / after drag ── */
$$('.ba__frame').forEach(f => {
  const input = $('input', f);
  input.addEventListener('input', () => f.style.setProperty('--pos', input.value + '%'));
});

/* ── hero video: seamless, continuous loop ──
   The whole clip (≈2 MB) is loaded into memory once so each loop restarts instantly
   instead of re-requesting the file from the server (which caused a stall at the seam). */
const heroVid = $('.hero__video');
if (heroVid) {
  heroVid.muted = true; heroVid.loop = true;
  const playHero = () => heroVid.play().catch(() => {});
  fetch(heroVid.currentSrc || heroVid.src).then(r => r.ok ? r.blob() : Promise.reject()).then(b => {
    const t = heroVid.currentTime;
    heroVid.src = URL.createObjectURL(b);
    heroVid.addEventListener('loadedmetadata', () => { heroVid.currentTime = t; playHero(); }, { once: true });
  }).catch(() => {});
  // safety net if a browser ignores `loop`
  heroVid.addEventListener('ended', () => { heroVid.currentTime = 0; playHero(); });
  // resume when the visitor returns to the tab
  document.addEventListener('visibilitychange', () => { if (!document.hidden && heroVid.getBoundingClientRect().bottom > 0) playHero(); });
  // phones in low-power mode block autoplay until the first touch
  addEventListener('touchstart', playHero, { once: true, passive: true });
}

/* ── videos play only on screen ── */
const vio = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()), { threshold: .3 });
$$('video').forEach(v => vio.observe(v));
$$('video[data-skip]').forEach(v => {
  const [a, b] = v.dataset.skip.split(',').map(Number);
  v.addEventListener('timeupdate', () => { if (v.currentTime > a && v.currentTime < b) v.currentTime = b; });
});

/* ── gallery lightbox ── */
const lb = $('#lightbox'), lbImg = $('img', lb);
$$('.gi:not(.is-missing) img').forEach(img => img.closest('.gi').addEventListener('click', () => {
  if (img.closest('.is-missing')) return;
  lbImg.src = img.src; lbImg.alt = img.alt; lb.hidden = false; lenis?.stop();
}));
const closeLb = () => { lb.hidden = true; lenis?.start(); };
lb.addEventListener('click', closeLb);
addEventListener('keydown', e => e.key === 'Escape' && !lb.hidden && closeLb());

/* ── founders slider ── */
const fs = $('#fslider');
if (fs) {
  const slides = $$('.fslide', fs), dots = $$('.fslider__dots button', fs);
  let idx = 0, timer;
  const go = n => {
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    dots.forEach((d, i) => { d.classList.remove('is-active'); void d.offsetWidth; d.classList.toggle('is-active', i === idx); });
    restart();
  };
  const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(idx + 1), 7000); };
  $$('.fbtn', fs).forEach(b => b.addEventListener('click', () => go(idx + +b.dataset.dir)));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
  fs.addEventListener('mouseenter', () => { clearInterval(timer); fs.classList.add('is-paused'); });
  fs.addEventListener('mouseleave', () => { fs.classList.remove('is-paused'); restart(); });
  let x0 = null;
  fs.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  fs.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1)); x0 = null; });
  restart();
}

/* ── booking → WhatsApp ── */
const form = $('#bform'), err = $('#bformErr');
form.date.min = new Date().toISOString().split('T')[0];
form.addEventListener('submit', e => {
  e.preventDefault();
  const services = $$('input[name="svc"]:checked', form).map(i => i.value);
  if (!services.length) { err.textContent = 'Please choose at least one service.'; return; }
  err.textContent = '';
  const d = new FormData(form);
  const msg = `Hi The Salon Vibe ✨\nI'd like to book an appointment.\n\nServices: ${services.join(', ')}\nDate: ${d.get('date')}\nTime: ${d.get('time')}\nName: ${d.get('name')}\nPhone: ${d.get('phone')}`;
  window.open(`https://wa.me/918208164163?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  if (dlg.open) dlg.close();
});

/* ── booking pop-up: the page's one form moves into the dialog and back ── */
const dlg = $('#bookDialog'), slot = $('#bookSlot'), formHome = $('#formHome');
function openBooking(svc) {
  if (svc) { const box = $(`#svcChips input[value="${svc}"]`); if (box) box.checked = true; }
  if (!dlg || typeof dlg.showModal !== 'function') { scrollToEl($('#booking')); return; }
  form.classList.add('is-in');
  formHome.style.minHeight = formHome.offsetHeight + 'px';   // keep the page the same height so nothing jumps
  slot.append(form);
  dlg.showModal();
  document.documentElement.classList.add('is-locked');
  lenis?.stop();
}
dlg?.addEventListener('close', () => {
  formHome.append(form);
  formHome.style.minHeight = '';
  err.textContent = '';
  document.documentElement.classList.remove('is-locked');
  lenis?.start();
});
$('.bsheet__close')?.addEventListener('click', () => dlg.close());
dlg?.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });   // tap outside the sheet

/* ── custom cursor + magnetic buttons ── */
if (fine && hasGSAP) {
  const c = $('.cursor');
  const cx = gsap.quickTo(c, 'x', { duration: .45, ease: 'power3' }), cy = gsap.quickTo(c, 'y', { duration: .45, ease: 'power3' });
  addEventListener('mousemove', e => { cx(e.clientX); cy(e.clientY); });
  $$('a, button, .gi, .ba input, .chips label').forEach(el => {
    el.addEventListener('mouseenter', () => c.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => c.classList.remove('is-hover'));
  });
  $$('.magnetic').forEach(b => {
    const mx = gsap.quickTo(b, 'x', { duration: .6, ease: 'elastic.out(1, .4)' }), my = gsap.quickTo(b, 'y', { duration: .6, ease: 'elastic.out(1, .4)' });
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); mx((e.clientX - r.left - r.width / 2) * .3); my((e.clientY - r.top - r.height / 2) * .3); });
    b.addEventListener('mouseleave', () => { mx(0); my(0); });
  });
}

$('#year').textContent = new Date().getFullYear();
