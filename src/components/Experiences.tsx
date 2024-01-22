function Experiences() {
  const experiences = [
    {
      logo: "/FLAGSSoftware.jpg",
      title: "Software Engineer",
      company: "FLAGS Software",
      date: "Jan 2023 - Present",
      location: "Solihull, United Kingdom",
      descriptions: [
        "At Flags Software, I initially joined as a front-end developer tasked with enhancing the reporting functionality for automotive manufacturing issues. I focused on creating visually compelling reports and charts using React and Material UI. As my role evolved, I took on additional responsibilities, including the development of a mobile site using Progressive Web App (PWA) technology. Moreover, I played a crucial role in writing the back-end code using C# and ASP.NET Web API, demonstrating versatility and contributing to the comprehensive development of software solutions at Flags.",
      ],
    },
    {
      logo: "/crowdproperty.png",
      title: "Software Engineer",
      company: "CrowdProperty",
      date: "Nov 2021 - Jan 2023",
      location: "Birmingham, United Kingdom",
      descriptions: [
        "I am solely responsible for setting up and maintaining any Vue.js related projects, as I am the only one in the company who knew how to use Vue.js. Some of the projects that I worked on included a new register journey for CrowdProperty Australia and CP Capital.",
        "I was involved in the start-up of CP Capital that is part of CrowdProperty. My primary responsibility was to develop the business functionality for the back end and front-end development.",
        "During my time here I have also been instrumental in assisting the implementation of content management system using Statamic.",
        "I spent my time working on redesigning the legacy codebase to Event-Driven Architecture using Laravel-event-sourcing",
      ],
    },
    {
      logo: "/justclip.png",
      title: "Founder",
      company: "Justclip (justclip.tv)",
      date: "Sep 2020 - Aug 2021",
      location: "Birmingham, United Kingdom",
      descriptions: [
        "Justclip is video sharing site that integrates Twitch clips, where viewers can share their favourite streamer moments, vote, and comment in clips organized around their interests. My job involves code, test, deploy and run..",
        "Built with PHP (Laravel), React and AWS",
      ],
    },
    {
      logo: "/220px-Birmingham_City_University_logo_with_white_tiger.jpg",
      title: "Demonstrator in Computing",
      company: "Birmingham City University",
      date: "Sep 2017 - Jan 2018",
      location: "Birmingham, United Kingdom",
      descriptions: [
        "Helping out 1st year students with python programming.",
        "Constantly learning new ways to communicate technical jargon in an easy and simple way to understand.",
      ],
    },
  ];

  return (
    <div id="experience">
      <h1>Experience</h1>
      {experiences.map((experience) => {
        return (
          <div className="experience-jobs">
            <div className="content">
              <div className="job-logo">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  width="60"
                  height="60"
                />
              </div>
              <div>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <h4>{experience.date}</h4>
                <h4>{experience.location}</h4>
                <ul>
                  {experience.descriptions.map((description) => {
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

export default Experiences;
