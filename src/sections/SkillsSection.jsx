import Reveal from '../components/Reveal';
import { useI18n } from '../i18n/I18nProvider';

function SkillLines({ lines }) {
  return (
    <>
      {lines.map((line, index) => {
        if (typeof line === 'string') {
          const isLast = index === lines.length - 1;
          return (
            <span key={line}>
              {line}
              {!isLast && <br />}
            </span>
          );
        }
        return (
          <span key={line.small}>
            <br />
            <small>{line.small}</small>
          </span>
        );
      })}
    </>
  );
}

export default function SkillsSection() {
  const { t } = useI18n();
  const s = t.skills;

  return (
    <section id="skills" className="skills section">
      <Reveal>
        <p className="eyebrow">{s.eyebrow}</p>
      </Reveal>
      <div className="skills-grid">
        {s.groups.map((group, index) => (
          <Reveal key={index}>
            <div>
              <h3>{group.heading}</h3>
              <p>
                <SkillLines lines={group.lines} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
