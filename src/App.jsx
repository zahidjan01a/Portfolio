import { useEffect, useState } from "react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ResearchInterests from "./components/ResearchInterests";
import Skills from "./components/Skills";

function App() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isLight ? "light" : "dark");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar isLight={isLight} onToggleTheme={() => setIsLight((prev) => !prev)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ResearchInterests />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
