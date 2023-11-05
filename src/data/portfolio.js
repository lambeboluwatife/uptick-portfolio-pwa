import weather from "../images/weather.webp";
import finalSpace from "../images/finalSpace.webp";
import LBDmovies from "../images/LBDmovies.webp";
import gkai from "../images/gkai.webp";
import camp from "../images/camp.webp";
import eventrite from "../images/show.webp";

const portfolios = [
  {
    name: "Final Space",
    skills: "HTML5 | CSS | JavaScript | API",
    image: finalSpace,
    desc: "This website contains everything to know about final space, from characters, locations and quotes.",
    live: "https://finalspaceapi.netlify.app/",
    source: "https://github.com/lambeboluwatife/FinalSpace",
    id: 1,
  },
  {
    name: "LBDmovies",
    skills: "HTML5 | CSS | JavaScript | API",
    image: LBDmovies,
    desc: "Browse through trending and latest movies and Tv shows.",
    live: "https://lbdmovies.netlify.app/",
    source: "https://github.com/lambeboluwatife/LBDmovies",
    id: 2,
  },
  {
    name: "Weather App",
    skills: "HTML5 | CSS | JavaScript | ReactJS | API",
    image: weather,
    desc: "Returns the weather data of your current location and you can search for weather data of any city in the world.",
    live: "https://react-weather-app-smoky-nu.vercel.app/",
    source: "https://github.com/lambeboluwatife/react-weather-app",
    id: 3,
  },
  {
    name: "Getting Killed And Injured (GKAI)",
    skills: "HTML5 | CSS | Bootstrap | JavaScript",
    image: gkai,
    desc: "Getting Killed And Injured (GKAI) is a logical game where users tries to get random 4 digits.",
    live: "https://lambeboluwatife.github.io/GKAI/",
    source: "https://github.com/lambeboluwatife/GKAI",
    id: 4,
  },
  {
    name: "Eventrite",
    skills:
      "HTML5 | CSS | Bootstrap | JavaScript | EJS | NodeJS | ExpressJS | MongoDB | Mongoose",
    image: eventrite,
    desc: "Host and create events online from Conferences, Hackathons, Conventions, Exhibitions, Seminars, Festivals, Trade Fair, etc.",
    live: "https://eventrite.boluwatifelambe.repl.co/",
    source: "https://github.com/lambeboluwatife/eventrite",
    id: 5,
  },
  {
    name: "DanCamp",
    skills:
      "HTML5 | CSS | Bootstrap | JavaScript | EJS | NodeJS | ExpressJS | MongoDB | Mongoose",
    image: camp,
    desc: "DanCamp is a web app where users can add and view info of various campgrounds.",
    live: "https://dancamp.boluwatifelambe.repl.co/",
    source: "https://github.com/lambeboluwatife/DanCamp/tree/dani",
    id: 6,
  },
];

export default portfolios;
