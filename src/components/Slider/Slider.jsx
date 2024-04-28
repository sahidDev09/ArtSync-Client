import "./Slider.css";
import landscape from "../../assets/slider/landscape.jpg";
import oil from "../../assets/slider/oilpainting.jpg";
import chorcal from "../../assets/slider/charcoalsketching.jpg";
import cartoon from "../../assets/slider/cartoonpaint.jpg";
import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const slider = document.querySelector(".slider");
    const sliderList = slider.querySelector(".list");
    const thumbnail = document.querySelector(".slider .thumbnail");
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    thumbnail.appendChild(thumbnailItems[0]);

    const moveSlider = (direction) => {
      const sliderItems = sliderList.querySelectorAll(".item");
      const thumbnailItems = document.querySelectorAll(".thumbnail .item");

      if (direction === "next") {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add("prev");
      }

      const animationEndHandler = () => {
        if (direction === "next") {
          slider.classList.remove("next");
        } else {
          slider.classList.remove("prev");
        }
        slider.removeEventListener("animationend", animationEndHandler);
      };

      slider.addEventListener("animationend", animationEndHandler, {
        once: true,
      });
    };

    nextBtn.addEventListener("click", () => moveSlider("next"));
    prevBtn.addEventListener("click", () => moveSlider("prev"));

    return () => {
      nextBtn.removeEventListener("click", () => moveSlider("next"));
      prevBtn.removeEventListener("click", () => moveSlider("prev"));
    };
  }, []);

  return (
    <div className=" mt-14 rounded-md">
      <div className="slider container mx-auto rounded-md">
        <div>
          <div className="list">
            <div className="item">
              <img src={landscape} alt="" />
              <div className="content">
                <div className="title">LANDSCAPE PAINTING</div>
                <div className="type">MOUNNTAINS</div>
                <div className="description">
                  Explore the serene and majestic landscapes through our
                  evocative paintings. Each canvas tells a story of natures
                  wonders
                </div>
              </div>
            </div>
            <div className="item">
              <img src={oil} alt="" />
              <div className="content">
                <div className="title">OIL PAINTING</div>
                <div className="type">NATURAL</div>
                <div className="description">
                  Welcome to a world of unparalleled beauty and artistry. Our
                  oil paintings capture the essence of landscapes with a
                  mesmerizing blend of color and technique.
                </div>
              </div>
            </div>
            <div className="item">
              <img src={chorcal} alt="" />
              <div className="content">
                <div className="title uppercase">Charcoal Sketching</div>
                <div className="type">ART</div>
                <div className="description">
                  Discover the allure of charcoal as we redefine the boundaries
                  of landscape sketching. Let our creations ignite your
                  imagination and inspire your own artistic journey.
                </div>
              </div>
            </div>
            <div className="item">
              <img src={cartoon} alt="" />
              <div className="content">
                <div className="title">CARTOON PAINTING</div>
                <div className="type">ANIMATION</div>
                <div className="description">
                  Step into a world of laughter and delight with our cartoon
                  paintings. Let our playful scenes and lively colors brighten
                  your day and ignite your imagination
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src={landscape} alt="" />
          </div>
          <div className="item">
            <img src={oil} alt="" />
          </div>
          <div className="item">
            <img src={chorcal} alt="" />
          </div>
          <div className="item">
            <img src={cartoon} alt="" />
          </div>
          {/* Add other thumbnail items similarly */}
        </div>
        <div className="nextPrevArrows">
          <button className="prev">◀️</button>
          <button className="next">▶️</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
