import { useEffect } from 'react';

export default function InteractiveEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rafId = null;
    let pendingEvent = null;

    const onBodyMove = (e) => {
      pendingEvent = e;
      if (rafId != null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const ev = pendingEvent;
        if (!ev) return;
        const x = (ev.clientX / window.innerWidth) * 100;
        const y = (ev.clientY / window.innerHeight) * 100;
        document.body.style.setProperty('--mx', `${x}%`);
        document.body.style.setProperty('--my', `${y}%`);
      });
    };

    const onCardMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--card-mx', `${x}%`);
      card.style.setProperty('--card-my', `${y}%`);
    };

    if (!reduceMotion) {
      window.addEventListener('mousemove', onBodyMove, { passive: true });
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', onCardMove, { passive: true });
    });

    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', onBodyMove);
      cards.forEach((card) => card.removeEventListener('mousemove', onCardMove));
      observer.disconnect();
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
