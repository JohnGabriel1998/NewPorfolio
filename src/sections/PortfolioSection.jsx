import Reveal from '../components/Reveal';
import ProjectVisual from '../components/ProjectVisual';
import { useI18n } from '../i18n/I18nProvider';

export default function PortfolioSection() {
  const { t } = useI18n();
  const p = t.portfolio;
  const projectCount = String(p.projects.length).padStart(2, '0');

  return (
    <section id="portfolio" className="portfolio section dark portfolio-showcase">
      <div className="portfolio-showcase__bg" aria-hidden="true" />

      <div className="portfolio-showcase__inner">
        <header className="portfolio-heading portfolio-showcase__head">
          <div className="portfolio-showcase__head-copy">
            <Reveal>
              <p className="eyebrow">{p.eyebrow}</p>
            </Reveal>
            <Reveal>
              <h2>
                {p.headingLine1}
                <br />
                <em>{p.headingEm}</em>
              </h2>
            </Reveal>
          </div>
          <Reveal className="portfolio-showcase__count">
            <span>{projectCount}</span>
            <small className="portfolio-showcase__count-label">Projects</small>
          </Reveal>
        </header>

        <div className="project-list portfolio-showcase__list">
          {p.projects.map((project, index) => (
            <Reveal key={index}>
              <article
                className={`project project-item${index % 2 === 1 ? ' project-item--reverse' : ''}`}
              >
                <div className="project-item__visual-wrap">
                  <span className="project-item__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="project-item__visual">
                    <ProjectVisual type={project.type} />
                  </div>
                </div>

                <div className="project-info project-item__content">
                  <div className="project-item__meta">
                    <small>{project.date}</small>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <ul className="project-item__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      className="project-link site-cta"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.visitLink} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="portfolio-links portfolio-showcase__outro">
          <div className="portfolio-showcase__outro-copy">
            <span>{p.moreLabel}</span>
            <h3>{p.moreHeading}</h3>
          </div>
          <div className="portfolio-actions portfolio-showcase__actions">
            {p.links.map(({ href, label }, index) => (
              <a key={index} className="site-cta site-cta--tile" href={href} target="_blank" rel="noreferrer">
                <span>{label}</span>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
