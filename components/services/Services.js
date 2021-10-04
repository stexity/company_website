import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ServicesCardComponent} from './ServicesCard'
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';
const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="services-section">
      <Jump>

      <div className="section-header">Services we offer </div>
      </Jump>
      <div className="service-list">
        <Slide bottom>

        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          autoPlaySpeed={2000}
          showDots={false}
          arrows={false}
          containerClass="dot-container"
          >
          <ServicesCardComponent title="Application Development" para="Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur."/>
          <ServicesCardComponent title="Cloud Computing" para="Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur."/>
          <ServicesCardComponent title="UI / UX" para="Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur."/>
          <ServicesCardComponent title="SEO" para="Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur."/>
        </Carousel>
              </Slide>
      </div>
    </div>
  );
};

export default Services;
