import { useLocation } from "react-router";
import { useSpring, animated } from "@react-spring/web";

const SideNav = ({ toggleSideNav }) => {
  const fadeIn = useSpring({
    from: { opacity: 0, marginLeft: -1 },
    to: { opacity: 1, marginLeft: 0 },
    config: {
      duration: 1000,
    },
  });

  const location = useLocation();

  let navStyle = "";
  if (location.pathname === "/about") {
    navStyle = "aboutStyle";
  }
  if (location.pathname === "/skills") {
    navStyle = "skillStyle";
  }
  if (location.pathname === "/portfolio" || location.pathname === "/contact") {
    navStyle = "portfolioStyle";
  }

  return (
    <animated.div className={`sidenav ${navStyle}`} style={fadeIn}>
      <h1>
        L<strong>.</strong>B<strong>.</strong>D
      </h1>
      <h6>Lambe Boluwatife Daniel</h6>
      <ul>
        <li>
          <a href="/" aria-label="Link to home page">
            HOME
          </a>
        </li>
        <li>
          <a href="/about" aria-label="Link to about page">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/skills" aria-label="Link to skills page">
            SKILLS
          </a>
        </li>

        <li>
          <a href="/portfolio" aria-label="Link to portfolio page">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a href="/contact" aria-label="Link to contact page">
            CONTACT
          </a>
        </li>
      </ul>
      <div className="social-links">
        <div className="social">
          <a
            rel="noreferrer"
            href="https://twitter.com/Danibholie"
            target="_blank"
            aria-label="Link to twitter profile"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="social">
          <a
            rel="noreferrer"
            href="https://www.instagram.com/lbd_codes/"
            target="_blank"
            aria-label="Link to instagram profile"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="social">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/lambe-boluwatife-870b6136"
            target="_blank"
            aria-label="Link to linkedin profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="social">
          <a
            rel="noreferrer"
            href="https://github.com/lambeboluwatife"
            target="_blank"
            aria-label="Link to github profile"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="btn">
        <button className={navStyle} onClick={toggleSideNav}>
          Close
        </button>
      </div>
    </animated.div>
  );
};

export default SideNav;
