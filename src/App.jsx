import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// lazy loading: each section is loaded as a separate file when needed
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<p className="loading">Loading...</p>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;