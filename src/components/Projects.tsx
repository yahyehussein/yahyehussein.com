function Projects() {
  const projects = [
    {
      thumbnail: "/connect4.png",
      name: "Connect4",
      description:
        "Throughout the assessment I learned a lot about client and server application. How there are interconnect by ServerSocket and Socket class.",
      skills: ["Java", "JavaFX"],
      link: "https://github.com/yahyehussein/connect4",
    },
    {
      thumbnail: "/memereview.png",
      name: "Memereview",
      description:
        "The team decided to create a web application called memereview. The purpose of this web app is to allow users to upload desirably memes, the app also allows users to leave comments about the memes too.",
      skills: [
        "PHP",
        "Laravel",
        "Vue.js",
        "Bootstrap",
        "Amazon Web Services (AWS)",
      ],
      link: "https://github.com/yahyehussein/meme-review",
    },
    {
      thumbnail: "/justfood.png",
      name: "JustFood",
      description:
        "There are more than 70,000 recipes to choose from food2fork API, covering breakfast, lunch, or dinner. The app also offers helpful photos from notable Food Network chefs and shows.",
      skills: ["Java", "Android"],
      link: "https://github.com/yahyehussein/JustFood",
    },
    {
      thumbnail: "/thedebt.png",
      name: "The Debt",
      description:
        "The text adventure task states that the player can play a simple game that identifies the key functionality. Based on the ideas of that the player can move around the world, interact with objects, store and examine items.",
      skills: ["F#"],
      link: "https://github.com/yahyehussein/The-debt",
    },
    {
      thumbnail: "/justclip-site.png",
      name: "Justclip",
      description:
        "Justclip is a network of communities based on power clipper's shared streamer moments. Find streamers you're interested in, and become part of an online community!",
      skills: [
        "HTML",
        "CSS",
        "TypeScript",
        "Tailwind CSS",
        "React.js",
        "Inertia.js",
        "PHP",
        "Laravel",
        "MySQL",
        "Amazon Web Services (AWS)",
      ],
      link: "https://github.com/yahyehussein/justclip.tv",
    },
  ];

  return (
    <div id="projects">
      <h1>Projects</h1>

      <div className="row">
        {projects.map((project) => {
          return (
            <div className="col s12 m6 l4">
              <div className="card medium">
                <div className="card-image white">
                  <img
                    alt="Connect4"
                    src={project.thumbnail}
                    className="activator"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator hoverline">
                    {project.name}
                    <i className="mdi-navigation-more-vert material-icons right">
                      more_vert
                    </i>
                  </span>
                  <p>{project.description}</p>
                </div>
                <div
                  className="card-reveal"
                  style={{ transform: "translateY(0px)" }}
                >
                  <span className="card-title brown-text">
                    Skills
                    <i className="mdi-navigation-close material-icons right">
                      close
                    </i>
                  </span>
                  <ul>
                    {project.skills.map((skill) => {
                      return <li style={{ margin: "0rem" }}>{skill}</li>;
                    })}
                  </ul>
                  <div className="card-action">
                    <a
                      href={project.link}
                      target="_blank"
                      data-position="top"
                      data-tooltip="View Source"
                      className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                    >
                      <i className="material-icons">code</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
