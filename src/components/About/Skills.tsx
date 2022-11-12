function Skills() {
  const skils = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "React",
    "Vue.js",
    "Node.js",
    "Inertia.js",
    "Laravel",
    "MySQL",
    "Amazon Web Services",
    "PHPUnit",
    "Jest",
    "Cypress",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Docker",
    "JavaScript",
    "TypeScript",
    "PHP",
    "SQL",
  ];

  return (
    <div className="col skills">
      <div className="header_1">
        <p className="title">SKILLS</p>
      </div>
      {skils.map((skill) => {
        return <p className="skill">{skill}</p>;
      })}
    </div>
  );
}

export default Skills;
