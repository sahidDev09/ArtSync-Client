import { Helmet } from "react-helmet";
import Contact from "./Home/Contact";
import Customer from "./Home/Customer";
import Slider from "./Slider/Slider";

const Home = () => {
  //locomotice smooth scroll

  return (
    <div>
      <Helmet>
        <title>ArtSync | Home</title>
      </Helmet>
      <Slider />
      <Customer />
      <Contact />
    </div>
  );
};

export default Home;
