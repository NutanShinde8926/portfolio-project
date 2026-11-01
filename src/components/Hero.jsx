import { info } from "../data";

function Hero() {
  return (
    <header id="home" className="hero">
      <p className="hello">Hello, I am</p>
      <h1>{info.name}</h1>
      <h2>{info.role}</h2>
      <p className="tagline">{info.tagline}</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn">
          View Projects
        </a>
        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Hero;