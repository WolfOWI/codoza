import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import { course } from "../../Data/course";
import CourseListView from "../../Component/Cards/CourseListView";
import FeatureCourseCard from "../../Component/Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
import GotoTop from "../../Component/GotoTop";

function Course2() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState("grid");
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header logo="assets/images/logo4.png" joinBtn={true} />
        <Banner title="Our Curriculum" background="assets/images/banner3.jpg" />
        <div className="container mt-5">
          <h5 className="font-weight-normal">
            Our 10-month curriculum is designed to take students from beginner to intermediate level
            in coding, ensuring they have a solid foundation in programming by the end of the
            course.
          </h5>
        </div>
        <section className="coursepage-section-2 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tab-content">
                  <div className="row">
                    {course.map((item) => (
                      <FeatureCourseCard
                        course={item}
                        key={item.id}
                        className="feature-course-item-3 fci-3"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Course2;
