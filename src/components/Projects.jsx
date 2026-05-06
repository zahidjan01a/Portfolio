import { projects } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Selected AI case studies"
          subtitle="Each project highlights the problem context, technical approach, and measurable outcome."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="glass-card project-card reveal">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-case-study">
                <p>
                  <strong>Problem:</strong> {project.problem}
                </p>
                <p>
                  <strong>Approach:</strong> {project.approach}
                </p>
                <p>
                  <strong>Result:</strong> {project.result}
                </p>
              </div>
              <div className="chip-wrap">
                {project.stack.map((item) => (
                  <span className="chip" key={`${project.title}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                View on GitHub ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
