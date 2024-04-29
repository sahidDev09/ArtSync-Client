import Contact from "./Home/Contact";
import Customer from "./Home/Customer";
import Slider from "./Slider/Slider";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

const Home = () => {
  //locomotice smooth scroll

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className="scroll-container">
      <Slider />
      <Customer />
      <Contact />
    </div>
  );
};

export default Home;
