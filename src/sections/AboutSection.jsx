import Reveal from '../components/Reveal';
import { useI18n } from '../i18n/I18nProvider';

export default function AboutSection() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="about" className="about section">
      <Reveal>
        <p className="eyebrow">{a.eyebrow}</p>
      </Reveal>
      <div className="two-col">
        <Reveal>
          <h2>
            {a.headingBefore}
            <em>{a.headingEm}</em>
            {a.headingAfter}
          </h2>
        </Reveal>
        <Reveal className="body-copy">
          {a.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a className="site-cta site-cta--ink" href="#contact">
            {a.link}
          </a>
        </Reveal>
      </div>
      <Reveal className="facts">
        {a.facts.map(([number, label], index) => (
          <div key={index}>
            <b>{number}</b>
            <span>{label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
