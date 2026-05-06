import { contact, heroTypingWords } from "../data/portfolioData";
import { useTypewriter } from "../hooks/useTypewriter";

function Hero() {
  const typedText = useTypewriter(heroTypingWords);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <p className="eyebrow">AI / ML Portfolio</p>
          <h1>Zahid Jan</h1>
          <h2>
            <span className="typing">{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="tagline">
            Building intelligent systems using Machine Learning, NLP, and Computer Vision.
          </p>
          <p className="hero-academic-note">
            Aspiring MS researcher focused on rigorous experimentation, model reliability, and practical AI deployment.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="/Zahid-Jan-CV.pdf" className="btn btn-secondary">
              Download CV
            </a>
          </div>
          <div className="hero-meta">
            <span>📍 {contact.location}</span>
            <a href={`mailto:${contact.email}`}>✉️ {contact.email}</a>
          </div>
        </div>
        <div className="hero-card reveal">
          <div className="profile-wrap">
            <picture>
              <source srcSet="/profile.jpeg" type="image/jpeg" />
              <source srcSet="/profile.jpg" type="image/jpeg" />
              <source srcSet="/profile.png" type="image/png" />
              <img
                src="/profile.jpeg"
                alt="Zahid Jan portrait"
                className="profile-photo"
                onError={(e) => {
                  e.currentTarget.src = "/profile-placeholder.svg";
                }}
              />
            </picture>
            <div className="profile-glow" />
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">6+</span>
              <span className="hero-stat-label">Featured AI Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">98%</span>
              <span className="hero-stat-label">Spam Classifier Accuracy</span>
            </div>
          </div>
          <ul>
            <li>🧠 Machine Learning & Deep Learning</li>
            <li>🗣️ NLP, Transformers & Generative AI</li>
            <li>👁️ Computer Vision & Image Intelligence</li>
            <li>⚙️ API-Ready, Production-Focused Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
