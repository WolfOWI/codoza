function About() {
  return (
    <section className="abpage-section-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="ab-thumb">
              <img src="assets/images/coding3d.png" alt="3D illustration of coding environment" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="ab-content-2">
              <h1 style={{ position: "absolute", opacity: 0 }}>
                Codoza Coding Academy - Our Story and Mission
              </h1>
              <h3>Our Story</h3>
              <h4 className="font-weight-normal">
                Codoza was founded to inspire the next generation of programmers by making coding
                accessible, fun, and creative.
              </h4>
            </div>
            <div className="fact-wrapper">
              <div className="funfact-item text-center">
                <img
                  src="assets/images/f1.png"
                  alt="Illustration representing number of students"
                />
                <h2>
                  <span data-counter="24200" className="timer">
                    500
                  </span>
                  +
                </h2>
                <p>Students</p>
              </div>
              <div className="funfact-item text-center">
                <img src="assets/images/f2.png" alt="Illustration representing number of topics" />
                <h2>
                  <span data-counter="6214" className="timer">
                    10
                  </span>
                  +
                </h2>
                <p>Topics</p>
              </div>
              <div className="funfact-item text-center">
                <img src="assets/images/f3.png" alt="Illustration representing number of awards" />
                <h2>
                  <span data-counter="2500" className="timer">
                    7
                  </span>
                  +
                </h2>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
