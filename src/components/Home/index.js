import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

import bg from "../../images/slider_bg.jpg";
import bg1 from "../../images/slide-1.jpg";
import bg2 from "../../images/slide-2.jpg";
import bg3 from "../../images/slide-3.jpg";

import { Container, SwiperDescription } from "./styles";
import FormSubmit from "./FormSubmit";
import WhyChooseUs from "./WhyChooseUs";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import CounterSection from "./CounterSection";
import LatestProject from "./LatestProject";

const data = [bg, bg1, bg2, bg3];

const Home = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // autoplay: { delay: 3000 },
  };

  return (
    <React.Fragment>
      <Container>
        <Swiper {...params}>
          {data.map((item, index) => (
            <div className="w-full h-full relative" key={index}>
              <div className="absolute w-full h-full bg-black-2"></div>
              <img src={item} alt="bg" className="backgound-img" />
              <SwiperDescription>
                <p className="text pb-4">
                  Keep your home <span>bug free</span>
                </p>
                <p className="description text-yellow-600 text-2xl leading-loose">
                  Keep your home bug free
                </p>
                <p className="description text-2xl text-red-600">
                  Keep your home bug free
                </p>
              </SwiperDescription>
            </div>
          ))}
        </Swiper>
        <FormSubmit />
      </Container>
      <WhyChooseUs />
      <AboutUs />
      <OurServices />
      <CounterSection />
      <LatestProject />
    </React.Fragment>
  );
};

export default Home;
