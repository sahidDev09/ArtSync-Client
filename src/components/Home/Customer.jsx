import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "./Customer.css";

function CustomerTestimonials() {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        depth: 300,
        modifier: 0.5,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <section>
      <h1>What our Customers Say</h1>
      <p className=" text-gray-400 text-center">
        Swipe left and right for more reviews
      </p>

      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="myCard swiper-slide">
            <div className="card_image">
              <img src="https://i.ibb.co/g4Bypmm/mumu.jpg" alt="" />
            </div>
            <div className="card_content">
              <span className="card_title">#Anjuman Mumu</span>
              <span className="card_name">🇧🇩 Bangladesh</span>
              <p className=" text-center my-2 text-gray-500 md:text-md">
                I recently purchased a handmade piece from artSync and I could
                not be happier! The attention to detail and craftsmanship are
                truly remarkable. I will be back for more!
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          <div className="myCard swiper-slide">
            <div className="card_image">
              <img
                src="https://i.ibb.co/J7VP48T/326740161-585653482906940-4044613279079956821-n.jpg"
                alt=""
              />
            </div>
            <div className="card_content">
              <span className="card_title">#Jibran Didar</span>
              <span className="card_name">🇧🇩 Bangladesh</span>
              <p className=" text-center my-2 text-gray-500 md:text-md">
                Wow! The item I received from exceeded my expectations. It is
                even more beautiful in person than it appeared online. Thank you
                for creating such wonderful art
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          <div className="myCard swiper-slide">
            <div className="card_image">
              <img
                src="https://i.ibb.co/QNrDX8p/437747788-1566233380822835-6003911588284162639-n.jpg"
                alt=""
              />
            </div>
            <div className="card_content">
              <span className="card_title">#Akib hasan</span>
              <span className="card_name">🇺🇸 USA</span>
              <p className=" text-center my-2 text-gray-500 md:text-md">
                I love browsing through the selection of art on artSync. It is
                like visiting a virtual gallery filled with treasures waiting to
                be discovered. Keep up the fantastic work!
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          <div className="myCard swiper-slide">
            <div className="card_image">
              <img src="https://i.ibb.co/yktZjQn/lisa.jpg" alt="" />
            </div>
            <div className="card_content">
              <span className="card_title">#Fatema Lisa</span>
              <span className="card_name">🇧🇩 Bangladesh</span>
              <p className=" text-center my-2 text-gray-500 md:text-md">
                ArtSync delivers exceptional craftsmanship! My recent purchase
                exceeded expectations. The attention to detail in the handmade
                piece I received is remarkable.
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          <div className="myCard swiper-slide">
            <div className="card_image">
              <img src="https://i.ibb.co/FDrGY6t/abid.jpg" alt="" />
            </div>
            <div className="card_content">
              <span className="card_title">#Abid Shariyar</span>
              <span className="card_name">🇹🇼 Taiwan</span>
              <p className=" text-center my-2 text-gray-500 md:text-md">
                I am always on the lookout for unique gifts, and I hit the
                jackpot with artSync. The recipient was thrilled with their
                one-of-a-kind present. I highly recommend shopping here!
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          <div className="myCard swiper-slide">
            <div className="card_image">
              <img src="https://i.ibb.co/TqN0392/emad.jpg" alt="" />
            </div>
            <div className="card_content">
              <span className="card_title">#Emad</span>
              <span className="card_name">🇸🇦 Saudi Arabia</span>
              <p className=" text-center my-2 text-gray-500 md:text-md">
                As an avid art collector, Iamm impressed by the quality of work
                available on. The diverse selection and talented artists make it
                a. Thank you for this service
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          <div className="myCard swiper-slide">
            <div className="card_image">
              <img src="https://i.ibb.co/JHqFM2K/rahi.jpg" alt="" />
            </div>
            <div className="card_content">
              <span className="card_title">#Fahmidur Rahi</span>
              <span className="card_name">🇺🇸 USA </span>
              <p className="text-center my-2 text-gray-500 md:text-md">
                I am constantly inspired by the creativity showcased on artSync.
                Whether I am looking for home décor or gifts for loved ones, I
                always find something special that speaks to me
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          <div className="myCard swiper-slide">
            <div className="card_image">
              <img src="https://i.ibb.co/f0GZbGQ/joyonto.jpg" alt="" />
            </div>
            <div className="card_content">
              <span className="card_title">#Joyanto </span>
              <span className="card_name">🇸🇸 South Sudan</span>
              <p className=" text-center my-2 text-gray-500 md:text-md">
                I am a repeat customer ofbecause of the consistently
                high-quality products and exceptional service. i recommended to
                people for buy something from them.
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          <div className="myCard swiper-slide">
            <div className="card_image">
              <img src="https://i.ibb.co/CHLHkrJ/sonia.jpg" alt="" />
            </div>
            <div className="card_content">
              <span className="card_title">#Sheik Sonia</span>
              <span className="card_name">🇬🇧 United Kingdom</span>
              <p className=" text-center my-2 text-gray-500 md:text-md">
                I recently redecorated my living room with pieces from artSync,
                and I could not be happier with the results. The artwork adds a
                unique fails to impress guests.
              </p>
              <button className="card_btn">View more</button>
            </div>
          </div>

          {/* Add other customer cards here */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default CustomerTestimonials;
