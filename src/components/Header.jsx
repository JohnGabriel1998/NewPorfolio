import { useEffect, useState } from 'react';
import { sectionIds } from '../data/content';
import { useI18n } from '../i18n/I18nProvider';

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
      setScrolled(window.scrollY > 32);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-menu-open' : ''}`}>
      <div className="header-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="header-shell">
        <a className="header-logo" href="#home" onClick={closeMenu}>
          <span className="header-logo-word">
            JGCB<sup>®</sup>
          </span>
          <span className="header-logo-sub">{t.header.logoSub}</span>
        </a>

        <nav className="header-nav" aria-label="Primary">
          {sectionIds.map((id, i) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={isActive ? 'is-active' : undefined}
                aria-current={isActive ? 'location' : undefined}
                onClick={closeMenu}
              >
                <span className="header-nav-index">{String(i).padStart(2, '0')}</span>
                <span className="header-nav-label">{t.header.nav[i]}</span>
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <span className="header-status" aria-live="polite">
            <i />
            {t.header.available}
          </span>
          <div className="header-lang-group" role="group" aria-label="Language">
            <button
              type="button"
              className={`header-lang${locale === 'en' ? ' is-active' : ''}`}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`header-lang${locale === 'ja' ? ' is-active' : ''}`}
              onClick={() => setLocale('ja')}
              aria-pressed={locale === 'ja'}
            >
              JP
            </button>
          </div>
          <a className="header-cta" href="#contact" onClick={closeMenu}>
            {t.header.cta} <b>↗</b>
          </a>
          <button
            type="button"
            className="header-menu"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t.header.menuClose : t.header.menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="header-drawer" aria-hidden={!open}>
        <nav className="header-drawer-nav" aria-label="Mobile">
          {sectionIds.map((id, i) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={isActive ? 'is-active' : undefined}
                onClick={closeMenu}
              >
                <span>{String(i).padStart(2, '0')}</span>
                <strong>{t.header.nav[i]}</strong>
              </a>
            );
          })}
        </nav>
        <a className="header-drawer-cta" href="#contact" onClick={closeMenu}>
          johncaganda0@gmail.com ↗
        </a>
      </div>
    </header>
  );
}
