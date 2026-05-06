import { skillGroups } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

function Skills() {
  const proficiency = {
    Python: 95,
    "Machine Learning": 92,
    "Deep Learning": 88,
    NLP: 90,
    "Generative AI": 84,
    FastAPI: 87,
    Flask: 82,
    Streamlit: 84,
    "Scikit-learn": 91,
    TensorFlow: 83,
    PyTorch: 85,
    "Data Analysis": 88,
    "Data Visualization": 85,
    MySQL: 80,
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Professional technical toolkit"
          subtitle="A curated skill architecture focused on applied AI engineering, model development, and deployment."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-card skill-card reveal">
              <h3>
                <span>{group.icon}</span> {group.title}
              </h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-row">
                      <span>{skill}</span>
                      <span>{proficiency[skill] ?? 85}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${proficiency[skill] ?? 85}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
