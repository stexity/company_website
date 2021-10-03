import React from "react";
import Image from 'next/image'
import bannerSvg from '../../public/assets/images/Wave.svg'
const Banner = () => {

  
  return (
    <div className="banner">
      <div className="banner-title">Stexity</div>
      <div className="banner-tagline">Innovation Meets Efficiency</div>
      <div className="banner-image">
      <Image  alt="Wave"
        layout="responsive"
        objectFit="fill" 
        quality={100} src={bannerSvg}/>
      </div>
    </div>
  );
};

export default Banner;
