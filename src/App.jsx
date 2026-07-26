import Header from './components/Header';
import useRevealAndGlow from './hooks/useRevealAndGlow';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import HeroSection from './sections/HeroSection';
import PortfolioSection from './sections/PortfolioSection';
import ServicesSection from './sections/ServicesSection';
import SkillsSection from './sections/SkillsSection';

function PortfolioApp() {
  const { locale } = useI18n();
  useRevealAndGlow(locale);

  return (
    <>
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
