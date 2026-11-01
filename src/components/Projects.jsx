import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="section alt">
      <h2 className="title">Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width="400"
              height="220"
            />
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="card-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;