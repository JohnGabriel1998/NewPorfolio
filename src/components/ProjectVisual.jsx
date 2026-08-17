export default function ProjectVisual({ type }) {
  if (type === 'portal') {
    return (
      <div className="project-visual portal">
        <span>
          ACADEMIC
          <br />
          PORTAL
        </span>
        <i />
        <i />
      </div>
    );
  }

  if (type === 'portfolio-card') {
    return (
      <div className="project-visual portfolio-card">
        <span>JGCB</span>
        <b>
          Portfolio
          <br />
          System
        </b>
      </div>
    );
  }

  if (type === 'tasks') {
    return (
      <div className="project-visual tasks">
        <span>✓</span>
        <span>×</span>
        <span>→</span>
      </div>
    );
  }

  if (type === 'timer') {
    return (
      <div className="project-visual timer">
        <span>25:00</span>
      </div>
    );
  }

  if (type === 'notes') {
    return (
      <div className="project-visual notes">
        <span>SCRIBE</span>
        <i>NOTES</i>
      </div>
    );
  }

  if (type === 'expense') {
    return (
      <div className="project-visual expense">
        <span>FLOW</span>
        <i>EXPENSE</i>
      </div>
    );
  }

  if (type === 'devflow') {
    return (
      <div className="project-visual devflow">
        <span>DEVFLOW</span>
        <i>PLAN · BUILD · SHIP</i>
      </div>
    );
  }

  return (
    <div className="project-visual apparel">
      <span>SEVEN</span>
      <i>APPAREL</i>
    </div>
  );
}
