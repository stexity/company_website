import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ServicesCardComponent} from './ServicesCard'
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';
import seo from '../../public/assets/images/seo.jpg'
import cc from '../../public/assets/images/cc.jpg'
import appdev from '../../public/assets/images/AppDev.jpeg'
import uiux from '../../public/assets/images/UIUX.png'
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
    <div id="Services" className="services-section">
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
          <ServicesCardComponent image={appdev}  title="Application Development" para="We provide a variety of high-quality desktop applications to assist you in running your business more effectively and efficiently."/>
          <ServicesCardComponent image={cc} title="Cloud Computing" para="We provide cloud services integration solutions that enable scalable computation for seamless connection with business intelligence, CRM, ERP, and identity management systems."/>
          <ServicesCardComponent image={uiux} title="UI / UX" para="We design responsive and attractive websites that meet all of your requirements while staying within your schedule and budget constraints."/>
          <ServicesCardComponent image={seo} title="SEO" para="We serve clients who demand a comprehensive, full-service search engine marketing strategy."/>
        </Carousel>
              </Slide>
      </div>
    </div>
  );
};

export default Services;
