import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section
      className="hero-banner-1"
      style={{ backgroundImage: "url(assets/images/home/banner.png)" }}
    >
      {/* shape  */}
      <div className="shape-wrap">
        <div className="b-shape-1">
          <img src="assets/images/home/shape-1.png" alt="" />
        </div>
        <div className="b-shape-2">
          <img src="assets/images/home/shape-2.png" alt="" />
        </div>
        <div className="b-shape-3">
          <img src="assets/images/home/shape-3.png" alt="" />
        </div>
        <div className="b-shape-4">
          <img src="assets/images/home/shape-4.png" alt="" />
        </div>
      </div>
      {/* shape  */}
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="hero-content">
              <h2>Welcome to Codoza</h2>
              <h1 style={{ position: "absolute", opacity: 0 }}>
                Welcome to Codoza - A Coding Program where kids become future coders!
              </h1>
              <h3>Where kids become future coders!</h3>
              <p>
                Join our fun and interactive 10-month coding program designed for kids aged 8 to 13.
              </p>
              <Link to="/curriculum" className="bisylms-btn">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="banner-thumb">
              <img src="assets/images/home/layer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
