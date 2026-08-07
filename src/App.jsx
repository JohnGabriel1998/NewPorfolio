import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import IntroOverlay, { INTRO_STORAGE_KEY } from './components/IntroOverlay';
import useRevealAndGlow from './hooks/useRevealAndGlow';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import HeroSection from './sections/HeroSection';
import PortfolioSection from './sections/PortfolioSection';
import ServicesSection from './sections/ServicesSection';
import SkillsSection from './sections/SkillsSection';

function getIntroDone() {
  if (typeof window === 'undefined') return true;
  return sessionStorage.getItem(INTRO_STORAGE_KEY) === '1';
}

function PortfolioApp() {
  const { locale } = useI18n();
  const [introDone, setIntroDone] = useState(getIntroDone);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  useRevealAndGlow(locale, introDone);

  useEffect(() => {
    document.documentElement.classList.toggle('is-intro-active', !introDone);
    return () => {
      document.documentElement.classList.remove('is-intro-active');
    };
  }, [introDone]);

  return (
    <>
      {!introDone && <IntroOverlay onComplete={handleIntroComplete} />}
      <div className="grain" />
      <div className="glow" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ServicesSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <PortfolioApp />
    </I18nProvider>
  );
}
