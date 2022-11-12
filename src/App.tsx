import About from "./components/About";
import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "60px" }}>YAHYE HUSSEIN</h1>
      <h3 style={{ textAlign: "center" }}>FULL STACK WEB DEVELOPER</h3>
      <div className="about">
        <About />
        <Experiences />
        <Projects />
        <Educations />
        <div id="contact">
          <h1>Contact</h1>
          <a href="" className="center">
            yah95hussein@gamil.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
