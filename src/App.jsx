import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRemove } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Loading from "./components/Loading";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const location = useLocation();

  const [sideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!sideNav);
  };

  let menuStyle = "";
  if (location.pathname === "/about") {
    menuStyle = "aboutStyle";
  }
  if (location.pathname === "/skills") {
    menuStyle = "skillStyle";
  }
  if (location.pathname === "/portfolio" || location.pathname === "/contact") {
    menuStyle = "portfolioStyle";
  }
  return (
    <div className="app">
      <div className="column left">
        <Nav />
      </div>
      <div className="column right">
        {sideNav && <SideNav toggleSideNav={toggleSideNav} />}

        <FontAwesomeIcon
          className={`fa-2x menu ${menuStyle}`}
          icon={sideNav ? faRemove : faBars}
          onClick={toggleSideNav}
        />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
