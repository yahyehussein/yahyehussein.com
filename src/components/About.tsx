import Skills from "./About/Skills";

function About() {
  return (
    <div className="grid">
      <Skills />
      <div className="pa">
        <div className="col profile">
          <div>
            <p>“First, solve the problem. Then, write the code.”</p>
            <h3>~ Yahye</h3>
          </div>
        </div>
        <div className="col about-info">
          <div className="about-text">
            <p>
              I am a dynamic and detail-oriented Full Stack Web Developer with a
              knack for conceptualizing and delivering elegant, user-friendly
              solutions effectively and efficiently. Possesses a track record of
              developing a fully-functional website for sharing best streamer
              moments. Armed with an extensive understanding of end-to-end
              Software Development Life Cycle and cloud computing. Avid Twitch
              integration developer and regular participant in community held
              events.
            </p>
          </div>
        </div>
      </div>
      <div className="rdg">
        <div className="col role">
          <p className="title">HOBBY</p>
          <p className="hobby">CODING | GAMING</p>
        </div>
        <a href="bcu-certificate-1-638.jpg" target="_blank">
          <div className="col degree"></div>
        </a>
        <div className="col github">
          <img src="Octocat.png" alt="" className="github-logo" />
          <a href="https://github.com/yahyehussein">
            <button className="view-certificate">
              View Github
              <span
                className="arrowBtn_dRMG"
                style={{ width: "34px", height: "16px" }}
              >
                <span id="readCvHover" className="hoverArrow_XAN2">
                  <svg
                    version="1.0"
                    x="0px"
                    y="0px"
                    viewBox="0 0 162 70.28"
                    fill="#c4b998"
                    style={{ width: "17px" }}
                  >
                    <circle
                      fill="#c4b998"
                      cx="31.57"
                      cy="35.21"
                      r="11.57"
                    ></circle>
                    <g>
                      <polygon
                        fill="#c4b998"
                        points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
                      ></polygon>
                      <rect
                        x="84.61"
                        y="29.76"
                        fill="#c4b998"
                        width="65"
                        height="11.06"
                      ></rect>
                    </g>
                  </svg>
                </span>
                <span id="readCvRest" className="restArrow_2evX">
                  <svg
                    version="1.0"
                    x="0px"
                    y="0px"
                    viewBox="0 0 162 70.28"
                    fill="#937341"
                    style={{ width: "17px" }}
                  >
                    <circle
                      fill="#937341"
                      cx="31.57"
                      cy="35.21"
                      r="11.57"
                    ></circle>
                    <g>
                      <polygon
                        fill="#937341"
                        points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
                      ></polygon>
                      <rect
                        x="84.61"
                        y="29.76"
                        fill="#937341"
                        width="65"
                        height="11.06"
                      ></rect>
                    </g>
                  </svg>
                </span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
