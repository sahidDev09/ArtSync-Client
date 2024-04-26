import React, { useEffect } from "react";
import "./Slider.css";

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
        <div >
        <div className="list">
          <div className="item">
            <img src="https://i.ibb.co/vDdn6bZ/catherine-kay-greenup-21nz-Scvbjs-M-unsplash-2.jpg" alt="" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">FLOWER</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1477647966959-5a95d41d625a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">NATURAL</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1584929308615-da204fe8d113?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">FLOWER</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1454191297004-cefa4b1042d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">FLOWER</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          {/* Add other items similarly */}
        </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img
              src="https://i.ibb.co/vDdn6bZ/catherine-kay-greenup-21nz-Scvbjs-M-unsplash-2.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1477647966959-5a95d41d625a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1584929308615-da204fe8d113?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1454191297004-cefa4b1042d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          {/* Add other thumbnail items similarly */}
        </div>
        <div className="nextPrevArrows">
          <button className="prev">Previous</button>
          <button className="next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
