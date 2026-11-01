import { education } from "../data";

function Resume() {
  return (
    <section id="resume" className="section alt">
      <h2 className="title">Resume</h2>
      <div className="resume">
        <h3>Education</h3>
        {education.map((item) => (
          <div className="edu" key={item.title}>
            <h4>{item.title}</h4>
            <p>
              {item.place} | {item.year}
            </p>
          </div>
        ))}
        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;