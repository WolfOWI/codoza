import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function FeatureCourseCard({ course, className, swiper }) {
  const { img, courseLink, author, title, heading, point01, point02 } = course;

  return (
    <div className={!swiper ? "col-lg-4 col-md-6" : ""}>
      <div className={`${className ? className : "feature-course-item-3"}`}>
        <div className="fcf-thumb">
          <img src={img} alt="" />
        </div>
        <div className="fci-details">
          <div className="c-cate">
            <i className="icon_tag_alt"></i>
            {title}
          </div>
          <div>
            <h4 className="mb-3">{heading}</h4>
            <p className="mb-4">
              {point01} {point02}
            </p>
          </div>
          <div className="author">
            <img src={author?.img} alt="" />
            <Link to={author?.profile}>{author?.name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

FeatureCourseCard.propTypes = {
  course: ProtoTypes.object,
  className: ProtoTypes.string,
  swiper: ProtoTypes.bool,
};

export default FeatureCourseCard;
