import portfolios from "../data/portfolio";

const Portfolio = () => {
  console.log("Portfolio is loading");

  return (
    <div className="portfolio">
      <h1 className="heading">PORTFOLIO</h1>
      <h3>For your view, this is a demonstration of my skill set.</h3>

      <div className="grid">
        {portfolios.map((portfolio) => (
          <div className="work" key={portfolio.id}>
            <h3>{portfolio.name}</h3>
            <h6>{portfolio.skills}</h6>
            <h6>{portfolio.desc}</h6>
            <img
              src={portfolio.image}
              alt={portfolio.name}
              width="80%"
              height="50%"
              loading="lazy"
            />
            <div className="link">
              <a href={portfolio.live} target="_blank" rel="noreferrer">
                Live Site
              </a>
              <a href={portfolio.source} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
