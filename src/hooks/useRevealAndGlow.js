import { useEffect } from 'react';

function revealInView(element, threshold = 0.12) {
  const rect = element.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.bottom <= 0 || rect.top >= viewHeight) return false;
  const visible = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);
  return visible / Math.max(rect.height, 1) >= threshold;
}

export default function useRevealAndGlow(locale) {
  useEffect(() => {
    const glow = document.querySelector('.glow');
    const move = (event) => {
      if (!glow) return;
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 },
    );

    const bindReveals = () => {
      document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
        if (revealInView(element)) {
          element.classList.add('visible');
        }
      });
    };

    const frame = requestAnimationFrame(bindReveals);

    window.addEventListener('pointermove', move);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('pointermove', move);
    };
  }, [locale]);
}
