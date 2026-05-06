import { researchInterests } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

function ResearchInterests() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Research Interests"
          title="Focused research directions"
          subtitle="Strategic domains where I aim to contribute through advanced study and impactful publications."
        />
        <div className="research-grid">
          {researchInterests.map((item) => (
            <article key={item} className="glass-card research-card reveal">
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchInterests;
