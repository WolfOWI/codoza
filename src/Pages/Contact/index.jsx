import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import ContactForm from "../../Component/Form/ContactForm";
import Map from "../../Component/Map";
import GotoTop from "../../Component/GotoTop";
import { Helmet } from "react-helmet";

function Contact() {
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
          <title>Contact Codoza - Coding Academy for Kids aged 8 to 13</title>
          <meta
            name="description"
            content="Get in touch with Codoza to learn more about our coding program for kids or ask any questions. We're here to assist with enrollment and inquiries."
          />
          <meta
            name="keywords"
            content="contact, coding academy, kids coding, South Africa, enrollment, Codoza"
          />
          <meta property="og:title" content="Contact Codoza - Coding Academy for Kids" />
          <meta
            property="og:description"
            content="Reach out to Codoza for any inquiries regarding our coding programs for kids, or for assistance with enrollment."
          />
          <meta property="og:image" content="assets/images/classroom-tablet.jpg" />
          <meta property="og:url" content="https://codoza.co.za/contact" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Header logo="assets/images/logo4.png" joinBtn={true} />
        <Banner title="Contact Us" background="assets/images/classroom-tablet.jpg" />
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact--info-area">
                  <h1 style={{ position: "absolute", opacity: 0 }}>
                    Codoza Coding Academy Contact Us Today
                  </h1>
                  <h3>Get in touch</h3>
                  <p>Looking for help? Fill the form and start a new adventure.</p>
                  <div className="single-info">
                    <h5>School Address</h5>
                    <p>
                      <i className="icon_house_alt"></i>
                      1297 John Vorster Dr, Southdowns, Centurion, 0062
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Contact Info</h5>
                    <p>
                      <i className="icon_phone"></i>
                      (+27) 12 648 9200
                    </p>
                    <p>
                      <i className="icon_mail_alt"></i>
                      support@codoza.co.za
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Enrollment Details</h5>
                    <p>
                      Classes begin every February.
                      <br />
                      Contact us to reserve your spot!
                    </p>
                  </div>
                  <div className="ab-social">
                    <h5>Follow Us</h5>
                    <a className="fac" href="https://www.facebook.com" target="_blank">
                      <i className="social_facebook"></i>
                    </a>
                    <a className="twi" href="https://www.x.com" target="_blank">
                      <i className="social_twitter"></i>
                    </a>
                    <a
                      className="you"
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                    >
                      <i className="social_youtube"></i>
                    </a>
                    <a className="lin" href="https://www.linkedin.com" target="_blank">
                      <i className="social_linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact-form">
                  <h3>Start Your Coding Journey Today</h3>
                  <p>
                    Complete the form below to reach out with any questions or to inquire about
                    enrolling in our 10-month program.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Map />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Contact;
