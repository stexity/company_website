import { useEffect } from "react";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";
import { MOBILE, SMALL_SCREEN } from "../../utils/constants/variables";
export default function Navbar() {
  const isMobile = useMediaQuery(`(max-width: ${SMALL_SCREEN})`);

  return (
    <nav className="navbar">
      <div className="nav-logo">Logo</div>
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
