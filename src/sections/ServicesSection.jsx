import MultilineTitle from '../components/MultilineTitle';
import Reveal from '../components/Reveal';
import { useI18n } from '../i18n/I18nProvider';

export default function ServicesSection() {
  const { t } = useI18n();
  const s = t.services;

  return (
    <section id="services" className="services section">
      <Reveal>
        <p className="eyebrow">{s.eyebrow}</p>
      </Reveal>
      <div className="service-grid">
        {s.items.map((item, index) => (
          <Reveal key={index}>
            <article>
              <span className="service-number">0{index + 1}</span>
              <h3>
                <MultilineTitle text={item.title} />
              </h3>
              <p>{item.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
