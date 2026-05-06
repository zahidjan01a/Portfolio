import { certifications } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Certifications"
          title="Validated learning milestones"
          subtitle="Continuous upskilling in AI, programming, and emerging technologies."
        />
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert} className="glass-card cert-card reveal">
              <h3>{cert}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
