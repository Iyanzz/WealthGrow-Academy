/**
 * WealthGrow Academy — Main JavaScript
 * =====================================================
 * KONFIGURASI KONTAK — EDIT SATU TEMPAT, BERLAKU DI MANA SAJA
 * Untuk mengubah nomor WhatsApp, cukup ganti nilai WA_NUMBER di bawah.
 * Semua tombol WhatsApp di seluruh halaman akan otomatis menggunakan
 * nomor yang sama.
 * =====================================================
 */

// =====================================================
//  ⚙️  KONFIGURASI KONTAK (EDIT DI SINI)
// =====================================================
const CONTACT = {
  WA_NUMBER: '6281336307404',          // Nomor WhatsApp (tanpa + atau spasi)
  WA_DEFAULT_MSG: 'Halo%2C%20saya%20ingin%20konsultasi%20gratis%20dengan%20WealthGrow%20Academy',
  EMAIL: 'hello@wealthgrowacademy.com',
  INSTAGRAM: 'https://instagram.com/wealthgrowacademy',
};
// =====================================================

(function () {
  'use strict';

  /* --------------------------------------------------
     1. WHATSAPP LINKS — Centralized
     Semua elemen dengan class .whatsapp-btn akan
     mendapatkan href otomatis dari CONTACT.WA_NUMBER
  -------------------------------------------------- */
  function initWhatsAppLinks() {
    const defaultUrl = `https://wa.me/${CONTACT.WA_NUMBER}?text=${CONTACT.WA_DEFAULT_MSG}`;

    document.querySelectorAll('.whatsapp-btn').forEach(function (el) {
      // Jika elemen sudah punya href spesifik (mengandung wa.me), pakai yang sudah ada
      // tapi ganti nomor dengan CONTACT.WA_NUMBER
      const existingHref = el.getAttribute('href') || '';
      if (existingHref.includes('wa.me')) {
        // Ganti nomor di href yang sudah ada
        const newHref = existingHref.replace(/wa\.me\/\d+/, `wa.me/${CONTACT.WA_NUMBER}`);
        el.setAttribute('href', newHref);
      } else {
        el.setAttribute('href', defaultUrl);
      }

      // Pastikan membuka di tab baru
      if (el.tagName === 'A') {
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  /* --------------------------------------------------
     2. STICKY HEADER
  -------------------------------------------------- */
  function initStickyHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    function handleScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* --------------------------------------------------
     3. HAMBURGER / MOBILE NAV
  -------------------------------------------------- */
  function initMobileNav() {
    const btn = document.getElementById('hamburger-btn');
    const nav = document.getElementById('mobile-nav');
    if (!btn || !nav) return;

    function toggleNav() {
      const isOpen = btn.classList.toggle('open');
      nav.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen.toString());
      nav.setAttribute('aria-hidden', (!isOpen).toString());
    }

    btn.addEventListener('click', toggleNav);

    // Tutup saat link di-klik
    nav.querySelectorAll('.mobile-nav__link, .mobile-nav__cta').forEach(function (link) {
      link.addEventListener('click', function () {
        btn.classList.remove('open');
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
      });
    });

    // Tutup saat klik di luar
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !nav.contains(e.target)) {
        btn.classList.remove('open');
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* --------------------------------------------------
     4. ACTIVE NAV LINK (Scroll Spy)
  -------------------------------------------------- */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], main section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    if (!navLinks.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* --------------------------------------------------
     5. SCROLL ANIMATIONS (IntersectionObserver)
  -------------------------------------------------- */
  function initAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* --------------------------------------------------
     6. COUNTER ANIMATION (Stats Section)
  -------------------------------------------------- */
  function initCounters() {
    const counters = document.querySelectorAll('.counter[data-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) { observer.observe(counter); });
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target).toLocaleString('id-ID');
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  /* --------------------------------------------------
     7. FAQ ACCORDION
  -------------------------------------------------- */
  function initFaq() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(function (item) {
      const btn = item.querySelector('.faq-item__question');
      if (!btn) return;

      btn.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');

        // Tutup semua item lain
        items.forEach(function (other) {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.faq-item__question')
              .setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle item yang diklik
        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', (!isOpen).toString());
      });
    });
  }

  /* --------------------------------------------------
     8. SMOOTH SCROLL untuk semua anchor link internal
  -------------------------------------------------- */
  function initSmoothScroll() {
    const headerHeight = 80; // tinggi header sticky

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* --------------------------------------------------
     9. FOOTER YEAR
  -------------------------------------------------- */
  function initFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------
     10. PROGRAM CARDS — Hover glow effect (desktop)
  -------------------------------------------------- */
  function initCardHover() {
    const cards = document.querySelectorAll('.program-card');
    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  /* --------------------------------------------------
     11. SCROLL TO TOP: Floating button ya appear after scroll
  -------------------------------------------------- */
  function initScrollReveal() {
    const floatWa = document.querySelector('.floating-wa');
    if (!floatWa) return;

    function toggleFloat() {
      if (window.scrollY > 300) {
        floatWa.style.opacity = '1';
        floatWa.style.transform = 'scale(1)';
      } else {
        floatWa.style.opacity = '0';
        floatWa.style.transform = 'scale(0.8)';
      }
    }

    // Awal: sembunyikan
    floatWa.style.opacity = '0';
    floatWa.style.transform = 'scale(0.8)';
    floatWa.style.transition = 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease';

    window.addEventListener('scroll', toggleFloat, { passive: true });
    toggleFloat();
  }

  /* --------------------------------------------------
     12. INIT ALL
  -------------------------------------------------- */
  function init() {
    initWhatsAppLinks();   // HARUS pertama — isi URL WA
    initStickyHeader();
    initMobileNav();
    initScrollSpy();
    initAnimations();
    initCounters();
    initFaq();
    initSmoothScroll();
    initFooterYear();
    initCardHover();
    initScrollReveal();
  }

  // Jalankan setelah DOM siap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
