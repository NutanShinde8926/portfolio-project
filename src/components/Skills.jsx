import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="title">Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-top">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;