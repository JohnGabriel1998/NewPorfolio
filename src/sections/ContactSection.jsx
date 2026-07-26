import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import ResumeLink from '../components/ResumeLink';
import { useI18n } from '../i18n/I18nProvider';

export default function ContactSection() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <section id="contact" className="contact section contact-page">
      <div className="contact-page__layout">
        <div className="contact-page__intro">
          <Reveal>
            <p className="eyebrow">{c.eyebrow}</p>
          </Reveal>
          <Reveal>
            <h2>
              {c.headingLine1}
              <br />
              {c.headingLine2Before}
              <em>{c.headingLine2Em}</em>
            </h2>
          </Reveal>
          <Reveal className="contact-meta contact-page__meta">
            <span>080-6383-3169</span>
            <a href="https://github.com/JohnGabriel1998" target="_blank" rel="noreferrer">
              {c.github}
            </a>
            <a href="https://linkedin.com/in/johngabrielbagacina" target="_blank" rel="noreferrer">
              {c.linkedin}
            </a>
          </Reveal>
          <Reveal>
            <ResumeLink />
          </Reveal>
        </div>

        <Reveal className="contact-page__form">
          <ContactForm />
        </Reveal>
      </div>

      <footer className="contact-page__footer">
        <span>{c.footerLeft}</span>
        <span>{c.footerRight}</span>
      </footer>
    </section>
  );
}
