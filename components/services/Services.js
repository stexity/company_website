import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <div className="section-header">Services we offer: </div>
      <div className="service-list">
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          autoPlaySpeed={3000}
          showDots={true}
          arrows={false}
          containerClass="dot-container"
          dotListClass="custom-dot-list"
        >
          <div className="service-card">
            <div className="service-card-title">Application Development</div>
            <p className="service-card-para">
              Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur.
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-title">Cloud Computing</div>
            <p className="service-card-para">
              Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur.
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-title">UI / UX</div>
            <p className="service-card-para">
              Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur.
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-title">SEO</div>
            <p className="service-card-para">
              Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur.
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-title">SEO</div>
            <p className="service-card-para">
              Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur.
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-title">SEO</div>
            <p className="service-card-para">
              Velit nostrud fugiat mollit velit adipisicing et. Excepteur quis
              enim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur
              adipisicing et aliqua enim sunt ad dolore aliqua. In veniam
              excepteur elit laborum ipsum nulla sunt. Lorem exercitation
              deserunt sint amet consectetur.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
