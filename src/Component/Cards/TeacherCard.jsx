import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function TeacherCard({ teacher, swiper }) {
  const { img, name, subject } = teacher;

  const card = (
    <div className="teacher-item">
      <div className="teacher-thumb">
        <img src={img} alt={`Portrait of ${name}, ${subject}`} />
        <div className="teacher-social">
          <a href="https://dribbble.com/" target="_blank">
            <i className="social_dribbble"></i>
            <span className="sr-only">Dribbble</span>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <i className="social_linkedin"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://vimeo.com/" target="_blank">
            <i className="social_vimeo"></i>
            <span className="sr-only">Vimeo</span>
          </a>
          <a href="https://www.tumblr.com/" target="_blank">
            <i className="social_tumblr"></i>
            <span className="sr-only">Tumblr</span>
          </a>
        </div>
      </div>
      <div className="teacher-meta">
        <h5>
          <Link to="/profile">{name}</Link>
        </h5>
        <p>{subject}</p>
      </div>
    </div>
  );

  return swiper ? card : <div className="col-lg-3 col-md-6">{card}</div>;
}

TeacherCard.propTypes = {
  teacher: ProtoTypes.object,
  swiper: ProtoTypes.bool,
};

export default TeacherCard;
