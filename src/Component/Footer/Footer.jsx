import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Footer({ getStart }) {
  return (
    <footer className={`footer-1 pt-5`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <aside className="widget">
              <div className="about-widget">
                <Link to="/">
                  <img src="assets/images/logo.png" alt="Codoza footer logo" />
                </Link>
                <p>Shaping Tomorrow's Innovators, One Line of Code at a Time</p>
              </div>
            </aside>
          </div>
          <div className="ab-social col-sm-12 col-md-8 w-100 text-sm-center text-md-left">
            <a className="fac m-4" href="https://www.facebook.com" target="_blank">
              <i className="social_facebook"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a className="twi m-4" href="https://www.x.com" target="_blank">
              <i className="social_twitter"></i>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="you m-4"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <i className="social_youtube"></i>
              <span className="sr-only">YouTube</span>
            </a>
            <a className="lin m-4" href="https://www.linkedin.com" target="_blank">
              <i className="social_linkedin"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright mt-2">
              <p>
                © 2024 Wolf Botha. All rights reserved. Please note: This website is for educational
                purposes only. Codoza is a fictional entity and does not represent a real business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  getStart: ProtoTypes.bool,
};

export default Footer;
