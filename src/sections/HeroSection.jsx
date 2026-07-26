import { useEffect, useRef } from 'react';
import Reveal from '../components/Reveal';
import { useI18n } from '../i18n/I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();
  const h = t.hero;
  const artRef = useRef(null);

  useEffect(() => {
    const art = artRef.current;
    if (!art) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const onMove = (event) => {
      const rect = art.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      art.style.setProperty('--portrait-tilt-x', `${y * -5}deg`);
      art.style.setProperty('--portrait-tilt-y', `${x * 5}deg`);
      art.style.setProperty('--portrait-shift-x', `${x * 10}px`);
      art.style.setProperty('--portrait-shift-y', `${y * 8}px`);
    };

    const onLeave = () => {
      art.style.setProperty('--portrait-tilt-x', '0deg');
      art.style.setProperty('--portrait-tilt-y', '0deg');
      art.style.setProperty('--portrait-shift-x', '0px');
      art.style.setProperty('--portrait-shift-y', '0px');
    };

    art.addEventListener('pointermove', onMove);
    art.addEventListener('pointerleave', onLeave);

    return () => {
      art.removeEventListener('pointermove', onMove);
      art.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">{h.eyebrow}</p>
        </Reveal>
        <h1>
          {h.titleLines.map((line, index) => (
            <Reveal key={index}>
              <span className={index === h.serifLineIndex ? 'serif' : undefined}>{line}</span>
            </Reveal>
          ))}
        </h1>
        <Reveal className="hero-bottom">
          <p>
            {h.name}
            <br />
            {h.stack}
          </p>
          <a href="#portfolio">
            {h.explore} <b>↓</b>
          </a>
        </Reveal>
      </div>

      <div
        className="hero-art"
        ref={artRef}
        style={{
          '--portrait-tilt-x': '0deg',
          '--portrait-tilt-y': '0deg',
          '--portrait-shift-x': '0px',
          '--portrait-shift-y': '0px',
        }}
      >
        <div className="hero-art-orbit" aria-hidden="true">
          <span className="hero-orbit-ring" />
          <span className="hero-orbit-ring hero-orbit-ring--inner" />
          <span className="hero-orbit-dot" />
        </div>

        <div className="circle one" />
        <div className="circle two" />

        <div className="portrait-stack">
          <div className="portrait-offset" aria-hidden="true" />
          <figure className="portrait-frame">
            <div className="portrait-media">
              <img
                src="/john-gabriel-portfolio.jpg"
                alt={h.imageAlt}
                width={640}
                height={640}
                decoding="async"
                fetchPriority="high"
              />
              <div className="portrait-tone" aria-hidden="true" />
              <div className="portrait-vignette" aria-hidden="true" />
              <div className="portrait-shine" aria-hidden="true" />
            </div>
            <figcaption className="portrait-badge">
              <span>{h.badgeAvailable}</span>
              <strong>2026</strong>
            </figcaption>
          </figure>
        </div>

        <div className="hero-art-index" aria-hidden="true">
          <span>00</span>
          <em>{h.portraitLabel}</em>
        </div>

        <div className="code-card">
          <small>const developer = {'{'}</small>
          <strong>"{h.codeCurious}"</strong>
          <small>{'}'};</small>
        </div>
      </div>
    </section>
  );
}
