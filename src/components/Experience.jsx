import { experiences } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="Academic and professional experience"
          subtitle="Selected roles demonstrating practical delivery, instructional leadership, and applied AI development."
        />
        <div className="timeline">
          {experiences.map((item) => (
            <article className="glass-card timeline-item reveal" key={item.role + item.organization}>
              <h3>{item.role}</h3>
              <h4>{item.organization}</h4>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
