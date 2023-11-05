import Resume from "../assets/BoluwatifeLambe_2.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="grid">
        <div className="about-content">
          <h1>About</h1>
          <ul>
            <li>
              <strong>Name:</strong> Lambe Boluwatife
            </li>
            <li>
              <strong>Email:</strong> boluwatifelambe@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> (+234) 80 8364 7531
            </li>
            <li>
              <strong>Address:</strong> Lagos, Nigeria
            </li>
            <li>
              <strong>Nationality:</strong> Nigerian
            </li>
          </ul>

          <h2>PROFESSIONAL PROFILE</h2>
          <h3>
            I am a Web Developer skilled in HTML, CSS, JavaScript, NodeJS,
            Bootstrap, ExpressJS, EJS, and MongoDB. My love for video games, and
            the idea of being able to build applications lured me into
            programming. <br /> I attribute my growth as a developer to
            consistent learning and development and also takes pride and
            pleasure in teaching and imparting people with my wealth of
            knowledge. <br /> When I'm not coding or studying, I spend my
            leisure time playing games, watching movies, and series.
          </h3>

          <a href={Resume} rel="noreferrer" target="_blank">
            DOWNLOAD RESUME AS PDF FORMAT
          </a>
        </div>
        <div className="about-img"></div>
      </div>
    </div>
  );
};

export default About;
