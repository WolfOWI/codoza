import { Link } from "react-router-dom";

function Cta() {
  return (
    <section
      className="cta-section"
      style={{
        backgroundImage: "url(assets/images/home/cta-bg.jpg)",
        padding: 100,
      }}
      role="img"
      aria-label="Parent testimonial background"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title" style={{ fontSize: "32px" }}>
              Parent Review
            </h2>
            <p>“My child loved learning to code and built their own game!”</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
