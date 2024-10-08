import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import HomeHero from "../../Component/Heros/Home-hero";
import PopularCourse from "../../Component/Course/PopularCourse";
import Cta from "../../Component/Cta/Cta";
import Footer from "../../Component/Footer/Footer";
import GotoTop from "../../Component/GotoTop";
import { Helmet } from "react-helmet";

function Home() {
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
          <title>Codoza - Home</title>
          <meta
            name="description"
            content="Welcome to Codoza, the coding academy for kids aged 8 to 13. Join our 10-month interactive program!"
          />
          <meta
            name="keywords"
            content="coding, kids, coding school, South Africa, game development, web design"
          />
          <meta property="og:title" content="Codoza - Home" />
          <meta
            property="og:description"
            content="Join Codoza's fun and interactive coding program for kids aged 8 to 13, based in South Africa."
          />
          <meta property="og:image" content="assets/images/logo.png" />
          <meta property="og:url" content="https://codoza.co.za" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Header logo="assets/images/logo.png" joinBtn={true} />
        <HomeHero />
        <PopularCourse course={true} heading={true} />
        <Cta />
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home;
