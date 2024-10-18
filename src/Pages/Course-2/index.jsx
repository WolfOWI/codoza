import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import { course } from "../../Data/course";
import FeatureCourseCard from "../../Component/Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
import GotoTop from "../../Component/GotoTop";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>
            Codoza - Curriculum - - The South African Coding academy for kids aged 8 to 13
          </title>
          <meta
            name="description"
            content="Explore Codoza's 10-month coding program where kids learn fundamental coding skills through hands-on projects in game development and web design."
          />
          <meta
            name="keywords"
            content="coding curriculum, coding for kids, 10-month program, beginner coding, intermediate coding, game development, web design, Codoza"
          />
          <meta property="og:title" content="Codoza - Curriculum" />
          <meta
            property="og:description"
            content="Our 10-month curriculum takes students from beginner to intermediate level in coding, teaching game development, web design, and problem-solving."
          />
          <meta property="og:image" content="assets/images/kids-developing.jpg" />
          <meta property="og:url" content="https://codoza.co.za/curriculum" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Header logo="assets/images/logo4.png" joinBtn={true} />
        <Banner title="Our Curriculum" background="assets/images/kids-developing.jpg" />
        <div className="container mt-5">
          <h1 style={{ position: "absolute", opacity: 0 }}>Codoza Coding Academy Curriculum</h1>
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
