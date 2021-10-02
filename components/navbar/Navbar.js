import { useEffect } from "react";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";
import { MOBILE, SMALL_SCREEN } from "../../utils/constants/variables";
import Image from 'next/image'
import logo from '../../public/assets/images/1.png'
export default function Navbar() {
  const isMobile = useMediaQuery(`(max-width: ${SMALL_SCREEN})`);

  return (
    <nav className="navbar">
      <div className="nav-logo"><Image height="50" width="50" src={logo}/></div>
      {isMobile ? (
        <div></div>
      ) : (
        <div className="nav-menu">
          <span>Services</span>
          <span>Portfolio</span>
          <span>Contact</span>
        </div>
      )}
    </nav>
  );
}
