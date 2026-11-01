import { about } from "../data";

function About() {
  return (
    <section id="about" className="section">
      <h2 className="title">About Me</h2>
      <div className="about">
        <img
          src="/images/profile.svg"
          alt="Profile"
          className="profile"
          loading="lazy"
          width="220"
          height="220"
        />
        <div>
          {about.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;