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
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg__grid" />
        <div className="hero-bg__glow hero-bg__glow--acid" />
        <div className="hero-bg__glow hero-bg__glow--warm" />
        <span className="hero-bg__mark">JG</span>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal>
            <p className="hero-kicker">
              <span className="hero-kicker__dot" aria-hidden="true" />
              {h.badgeAvailable}
            </p>
          </Reveal>
          <Reveal>
            <p className="hero-intro">{h.introLine}</p>
          </Reveal>
          <h1>
            {h.titleLines.map((line, index) => (
              <Reveal key={index}>
                <span className={index === h.serifLineIndex ? 'serif' : undefined}>{line}</span>
              </Reveal>
            ))}
          </h1>
          <Reveal className="hero-bottom">
            <div className="hero-tagline">
              <p className="hero-roles">
                {h.roles.map((role, index) => (
                  <span key={role} className="hero-role">
                    {index > 0 && (
                      <span className="hero-role-sep" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <span className={index === h.rolesHighlightIndex ? 'hero-role-em' : undefined}>
                      {role}
                    </span>
                  </span>
                ))}
              </p>
              <ul className="hero-stack" aria-label={h.stackLabel}>
                {h.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <a className="site-cta" href="#portfolio">
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
          <div className="hero-art__stage">
            <div className="hero-art__glow" aria-hidden="true" />
            <div className="circle one" aria-hidden="true" />
            <div className="circle two" aria-hidden="true" />

            <div className="hero-art__panel">
              <div className="hero-art__panel-grid" aria-hidden="true" />
              <span className="hero-art__brace hero-art__brace--open" aria-hidden="true">
                {'{'}
              </span>
              <span className="hero-art__brace hero-art__brace--close" aria-hidden="true">
                {'}'}
              </span>

              <div className="portrait-stack">
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
            </div>

            <div className="code-card">
              <div className="code-card__chrome" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <small>const developer = {'{'}</small>
              <strong>"{h.codeCurious}"</strong>
              <small>{'}'};</small>
            </div>

            <ul className="hero-art__chips" aria-hidden="true">
              {h.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
