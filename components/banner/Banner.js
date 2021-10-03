import React from "react";
import Image from 'next/image'
import bannerSvg from '../../public/assets/images/Wave.svg'
const Banner = () => {

  
  return (
    <div className="banner">
      {/* <Image src={bannerSvg}/> */}
      <div className="banner-title">Stexity</div>
      <div className="banner-tagline">Innovation Meets Efficiancy</div>
    </div>
  );
};

export default Banner;
