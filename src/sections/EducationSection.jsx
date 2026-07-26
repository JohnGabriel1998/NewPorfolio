import Reveal from '../components/Reveal';
import { useI18n } from '../i18n/I18nProvider';

export default function EducationSection() {
  const { t } = useI18n();
  const e = t.education;

  return (
    <section id="education" className="education section dark">
      <Reveal>
        <p className="eyebrow">{e.eyebrow}</p>
      </Reveal>
      <Reveal>
        <h2>
          {e.headingLine1}
          <br />
          <em>{e.headingEm}</em>
        </h2>
      </Reveal>
      <div className="timeline">
        {e.items.map((item, index) => (
          <Reveal key={index}>
            <article>
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.school}</p>
              </div>
              <small>{item.note}</small>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="awards">
        <span>{e.awardsLabel}</span>
        {e.awards.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </Reveal>
    </section>
  );
}
