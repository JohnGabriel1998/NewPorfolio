import { useCallback, useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';

export const INTRO_STORAGE_KEY = 'jgcb-intro-seen';

const ENTER_MS = 1200;
const HOLD_MS = 400;
const EXIT_MS = 900;

export default function IntroOverlay({ onComplete }) {
  const { t } = useI18n();
  const intro = t.intro;
  const [phase, setPhase] = useState('enter');
  const finishingRef = useRef(false);
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const completeIntro = useCallback(() => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, '1');
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.hash = 'home';
    onComplete();
  }, [onComplete]);

  const finish = useCallback(
    (immediate = false) => {
      if (finishingRef.current) return;
      finishingRef.current = true;
      clearTimers();

      if (immediate) {
        completeIntro();
        return;
      }

      setPhase('exit');
      timersRef.current.push(setTimeout(completeIntro, EXIT_MS));
    },
    [completeIntro],
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      finish(true);
      return undefined;
    }

    timersRef.current.push(
      setTimeout(() => setPhase('hold'), ENTER_MS),
      setTimeout(() => finish(false), ENTER_MS + HOLD_MS),
    );

    return clearTimers;
  }, [finish]);

  useEffect(() => () => clearTimers(), []);

  return (
    <div
      className={`intro-overlay intro-overlay--${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label={intro.nameLines.join(' ')}
    >
      <button type="button" className="intro-overlay__skip" onClick={() => finish(false)}>
        {intro.skip}
      </button>

      <div className="intro-overlay__backdrop" aria-hidden="true" />

      <div className="intro-overlay__stage">
        <p className="intro-overlay__eyebrow">{intro.eyebrow}</p>
        <h1 className="intro-overlay__name">
          {intro.nameLines.map((line, index) => (
            <span
              key={line}
              className={index === intro.serifLineIndex ? 'intro-overlay__name-serif' : undefined}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {line}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
