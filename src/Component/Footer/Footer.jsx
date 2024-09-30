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
                  <img src="assets/images/logo.png" alt="" />
                </Link>
                <p>Shaping Tomorrow's Innovators, One Line of Code at a Time</p>
              </div>
            </aside>
          </div>
          <div className="ab-social col-sm-12 col-md-8 w-100 text-sm-center text-md-left">
            <a className="fac m-4" href="https://www.facebook.com" target="_blank">
              <i className="social_facebook"></i>
            </a>
            <a className="twi m-4" href="https://www.x.com" target="_blank">
              <i className="social_twitter"></i>
            </a>
            <a
              className="you m-4"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <i className="social_youtube"></i>
            </a>
            <a className="lin m-4" href="https://www.linkedin.com" target="_blank">
              <i className="social_linkedin"></i>
            </a>
          </div>
        </div>
        {/* Copyright  */}
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
        {/* Copyrigh  */}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  getStart: ProtoTypes.bool,
};

export default Footer;
