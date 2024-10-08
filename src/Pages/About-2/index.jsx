import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import About from "../../Component/About";
import GotoTop from "../../Component/GotoTop";
import TeacherCard from "../../Component/Cards/TeacherCard";
import FeatureHome3 from "../../Component/Features/FeatureHome3";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>About Codoza</title>
          <meta
            name="description"
            content="Learn more about Codoza, our mission to empower kids through coding, and meet our talented instructors."
          />
          <meta
            name="keywords"
            content="Codoza, coding academy, about us, kids coding, instructors, South Africa"
          />
          <meta property="og:title" content="About Codoza" />
          <meta
            property="og:description"
            content="Codoza is a coding academy designed for kids aged 8 to 13, where learning is interactive and fun."
          />
          <meta property="og:image" content="assets/images/two-kids-class.jpg" />
          <meta property="og:url" content="https://codoza.co.za/about" />
          <meta name="robots" content="index, follow" />
        </Helmet>
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
