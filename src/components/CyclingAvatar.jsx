import { useEffect, useRef } from 'react';

// avatar-laptop is excluded on purpose: at 72px the laptop fills the frame and
// the face is a sliver above it. See media/README.md — it is the 160px About
// portrait and nothing smaller.
const FRAMES = ['/media/avatar.webp', '/media/avatar-smirk.webp', '/media/avatar-thumbsup.webp'];

export function CyclingAvatar() {
  const ref = useRef(null);

  useEffect(() => {
    // Opt-in by motion preference: a looping image swap is exactly what
    // prefers-reduced-motion exists to stop.
    if (!matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

    const img = ref.current;
    // Preload so the swap never shows a gap on a cold cache.
    FRAMES.forEach((src) => {
      new Image().src = src;
    });

    let i = 0;
    let swapping = false;

    function handleTransitionEnd() {
      if (!swapping) return;
      swapping = false;
      img.src = FRAMES[i];
      img.style.opacity = '1';
    }

    img.addEventListener('transitionend', handleTransitionEnd);
    const timer = setInterval(() => {
      if (document.hidden) return;
      i = (i + 1) % FRAMES.length;
      swapping = true;
      img.style.opacity = '0';
    }, 4200);

    return () => {
      clearInterval(timer);
      img.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  return (
    <img
      ref={ref}
      className="avatar avatar-inline"
      data-cycle=""
      src={FRAMES[0]}
      width={512}
      height={512}
      decoding="async"
      alt="Nelson Mwaura"
    />
  );
}
