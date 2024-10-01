import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import About from "../../Component/About";
import Testimonial from "../../Component/Testimonials/Testimonial";
import Customer from "../../Component/Customer/Customer";
import Event from "../../Component/Event/Event";
import GotoTop from "../../Component/GotoTop";
import TeacherCard from "../../Component/Cards/TeacherCard";
import FeatureHome3 from "../../Component/Features/FeatureHome3";

function About2() {
  const [isLoading, setIsLoading] = useState(true);
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
        <Banner title="About Codoza" background="assets/images/two-kids-class.jpg" />
        <About />
        <section className="instructor-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-25">Meet Our Instructors</h2>
              </div>
            </div>
            <div className="row">
              <TeacherCard
                teacher={{
                  img: "assets/images/instructors/lect-1.png",
                  name: "Lana Debugger",
                  subject: "Full Stack Developer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/instructors/lect-2.png",
                  name: "Felix Variables",
                  subject: "Game Developer",
                }}
              />
              <TeacherCard
                teacher={{
                  img: "assets/images/instructors/lect-3.png",
                  name: "Tina Loops",
                  subject: "Web Designer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/instructors/lect-4.png",
                  name: "Milo Functions",
                  subject: "Front-End Developer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/instructors/lect-5.png",
                  name: "Zara Styles",
                  subject: "CSS Expert",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/instructors/lect-6.png",
                  name: "Oliver Syntax",
                  subject: "JavaScript Developer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/instructors/lect-7.png",
                  name: "Isla Arrays",
                  subject: "Back-End Developer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/instructors/lect-8.png",
                  name: "Finn Boolean",
                  subject: "App Developer",
                }}
              />
            </div>
          </div>
        </section>
        <FeatureHome3 />
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default About2;
