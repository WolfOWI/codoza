import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Error() {
  const [isLoading, setIsLoading] = useState(true);

  //handle Loading
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
            Page Not Found - Codoza - - The South African Coding academy for kids aged 8 to 13
          </title>
          <meta
            name="description"
            content="The page you are looking for does not exist. Please check the URL or return to the homepage."
          />
          <meta name="robots" content="noindex, follow" />
          <meta property="og:title" content="Page Not Found - Codoza" />
          <meta
            property="og:description"
            content="Oops! We can't find the page you're looking for. Return to the homepage or contact us for help."
          />
          <meta property="og:image" content="assets/images/404-bg.jpg" />
          <meta property="og:url" content="https://codoza.co.za/404" />
        </Helmet>

        <section
          className="section-404"
          style={{ backgroundImage: "url(assets/images/404-bg.jpg)" }}
        >
          <div className="middle-404">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12">
                  <div className="content-404">
                    <img src="assets/images/404.png" alt="" />
                    <h2>Oooops!</h2>
                    <p>We have something broken.</p>
                    <ul>
                      <li>
                        <Link to="/">Go Back Home</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return content;
}

export default Error;
