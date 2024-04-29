import Contact from "./Home/Contact";
import Customer from "./Home/Customer";
import Slider from "./Slider/Slider";


const Home = () => {
  //locomotice smooth scroll

  return (
    <div>
      <Slider />
      <Customer />
      <Contact />
    </div>
  );
};

export default Home;
