import { Link } from "react-router-dom";
import planelogo from "./images/airplane-mode.png";
import menuIcon from "./images/menu.png";
import closeMenuIcon from "./images/cross.png";
import { useState } from "react";

export default function Navbar() {
  function openMobileMenu() {
    setShowMenu(true);
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    setShowMenu(false);
    document.body.style.overflow = "unset";
  }

  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <nav id="Mobilenav">
        <img
          src={closeMenuIcon}
          alt="close menu icon"
          id="closeMenuIcon"
          onClick={closeMobileMenu}
        ></img>
        <h1>Superflight</h1>
        <ul>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Search flights
            </Link>
          </li>
          <li>
            <Link to="/Tips" onClick={closeMobileMenu}>
              Search tips
            </Link>
          </li>
          <li>
            <Link to="/Partnership" onClick={closeMobileMenu}>
              Partnership
            </Link>
          </li>
          {/* <Link to="/journeysList">Journey List</Link> */}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={planelogo} alt="plane icon"></img>
        <h1>Superflight</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Search flights</Link>
        </li>
        <li>
          <Link to="/Tips">Search tips</Link>
        </li>
        <li>
          <Link to="/Partnership">Partnership</Link>
        </li>
        {/* <Link to="/journeysList">Journey List</Link> */}
      </ul>
      <img
        src={menuIcon}
        alt="mobile menu icon"
        id="menuIcon"
        onClick={openMobileMenu}
      ></img>
      {menu}
    </nav>
  );
}
