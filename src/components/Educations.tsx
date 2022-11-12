function Educations() {
  const educations = [
    {
      image: "/220px-Birmingham_City_University_logo_with_white_tiger.jpg",
      school: "Birmingham City University",
      degree: "BSc (Hons), Computer Science, 1st class honour",
      date: "2016 - 2019",
      descriptions: [
        "Awarded 'BCS - Tazmmal Husein Memorial Prize' for getting the highest grades in the first year of computer science.",
        "Led a team of 4 classmates developers to direct the end-to-end connect4 application lifecycle process with a focus on coding and achieved delivery in an effective and quality bound manner. Deployed the web server to handle multiple concurrent users.",
        "Regular participant of HackTheMidlands at Birmingham City University. As a team we built a memereview site where users can post and review on new meme images.",
      ],
    },
    {
      image: "/sothandcitycollege.jpg",
      school: "South &amp; City College Birmingham",
      degree:
        "Level 3 BTEC Extended National Diploma, Information Technolgy, D*D*D*",
      date: "2014 - 2013",
      descriptions: [],
    },
    {
      image: "/josephchamberlaincollege.jpg",
      school: "Joseph Chamberlain Sixth Form College",
      degree: "GCSE, 4 A-C grades",
      date: "2012 - 2013",
      descriptions: [],
    },
  ];

  return (
    <div id="education">
      <h1>Education</h1>
      {educations.map((education) => {
        return (
          <div className="experience-jobs">
            <div className="content">
              <div className="job-logo">
                <img
                  src={education.image}
                  alt="bcu logo"
                  width="60"
                  height="60"
                />
              </div>
              <div>
                <h3>{education.school}</h3>
                <h4>{education.degree}</h4>
                <h4>{education.date}</h4>
                <ul>
                  {education.descriptions.map((description) => {
                    return <li className="text-primary">{description}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Educations;
