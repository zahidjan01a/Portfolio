import { aboutSummary } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="About Me"
          title="Research-oriented AI engineer with deployment focus"
          subtitle="An academic and professional profile aligned with graduate study and industry impact."
        />
        <div className="glass-card about-card reveal">
          <p>{aboutSummary}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
