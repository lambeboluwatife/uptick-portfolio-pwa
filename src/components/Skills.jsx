import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faBootstrap,
  faNodeJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faDatabase,
  faLaptop,
  faM,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  console.log("Skills is loading");

  return (
    <div className="grid">
      <div className="skills">
        <h1>Skills</h1>
        <h3>Available skills that I can work with.</h3>

        <div className="frontend-skills">
          <b>
            <span className="number">
              <strong>01.</strong>
            </span>
            <span> Web Development (Frontend)</span>
            <h6>Harnessing Frontend Skills for Modern Development.</h6>
          </b>
          <div className="skills-flex">
            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faHtml5} />
              <h6>HTML</h6>
            </div>
            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faCss3} />
              <h6>CSS</h6>
            </div>
            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faJsSquare} />
              <h6>JAVASCRIPT</h6>
            </div>
            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faReact} />
              <h6>REACT</h6>
            </div>
            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faBootstrap} />
              <h6>BOOTSTRAP</h6>
            </div>
          </div>
        </div>

        <div className="backend-skills">
          <b>
            <span className="number">
              <strong>02.</strong>
            </span>
            <span> Web Development (Backend)</span>
            <h6>Building Robust and Scalable Web Applications.</h6>
          </b>

          <div className="skills-flex">
            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faNode} />
              <h6>NODEJS</h6>
            </div>

            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faNodeJs} />
              <h6>EXPRESSJS</h6>
            </div>

            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faDatabase} />
              <h6>MONGODB</h6>
            </div>

            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faCode} />
              <h6>EJS</h6>
            </div>
            <div className="skill">
              <FontAwesomeIcon className="fa-3x icon" icon={faM} />
              <h6>MONGOOSE</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <h1>Experience</h1>
        <h6>
          Hi there! I'm a seasoned web developer with a passion for creating
          stunning digital experiences. With years of hands-on experience, I've
          honed my skills in HTML, CSS, and JavaScript to craft captivating and
          interactive websites.
        </h6>
        <div className="works">
          <div className="work">
            <FontAwesomeIcon className="fa-3x icon" icon={faLaptop} />
            <div className="work-info">
              <h4>ANDELA</h4>
              <h2>WEB DEVELOPER (INTERN)</h2>
              <h6>April 2019 - Nov. 2019</h6>
              <h6>Lagos, NIgeria</h6>
            </div>
          </div>
          <div className="work">
            <FontAwesomeIcon className="fa-3x icon2" icon={faLaptop} />
            <div className="work-info work-info2">
              <h4>GODONWEB TECHNOLOGIES</h4>
              <h2>SOFTWARE ENGINEER</h2>
              <h6>June 2022 - Sept. 2022</h6>
              <h6>South Africa</h6>
            </div>
          </div>
          <div className="work ">
            <FontAwesomeIcon className="fa-3x icon" icon={faLaptop} />
            <div className="work-info">
              <h4>ENOVERLAB</h4>
              <h2>LEAD FRONTEND ENGINEER</h2>
              <h6>August, 2023</h6>
              <h6>Lagos, NIgeria</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
