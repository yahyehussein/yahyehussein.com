function Experiences() {
  const experiences = [
    {
      logo: "/crowdproperty.png",
      title: "Full Stack PHP Developer",
      company: "Justclip (justclip.tv)",
      date: "November 2021 - Present",
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
      company: "CrowdProperty",
      date: "February 2020 - August 2021",
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
      date: "Sep 2017 - Jan 2018 | 5 mos",
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
