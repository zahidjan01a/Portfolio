import { contact } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Open to research and engineering collaborations"
          subtitle="Available for MS opportunities, internships, and high-impact AI projects."
        />
        <div className="glass-card contact-card reveal">
          <p>{contact.role}</p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>Email: {contact.email}</a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
