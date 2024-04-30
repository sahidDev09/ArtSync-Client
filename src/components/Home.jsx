import { Helmet } from "react-helmet";
import Contact from "./Home/Contact";
import Customer from "./Home/Customer";
import Slider from "./Slider/Slider";
import ItemCards from "./Home/ItemCards";

const Home = () => {
  //locomotice smooth scroll

  return (
    <div>
      <Helmet>
        <title>ArtSync | Home</title>
      </Helmet>
      <Slider />
      <ItemCards></ItemCards>
      <Customer />
      <Contact />
    </div>
  );
};

export default Home;
