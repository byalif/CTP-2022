import { GiHamburgerMenu } from "react-icons/gi";
import React, { useRef, useState, useEffect } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import Card from "./Card.js";

const Navbar = () => {
  const [show, showCart] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const colors = [
    "#73bbbf",
    "#9baae0",
    "#b3a6e3",
    "#d197c5",
    "#cc95a3",
    "#95c9b9",
    "#a8c999",
    "#d1ca86",
    "#c2a776",
    "#73c26e",
    "#419154",
  ];

  return (
    <div className="cont">
      <div className="navbar2 ">
        <li
          style={{ marginTop: "50px", marginLeft: "15px" }}
          className="nav-item col d-flex justify-content-start"
        >
          <a className="navbar-brand logo cdp" href="/">
            iWardrobe
          </a>
        </li>
        <div className="ham">
          {navbar ? (
            <RiCloseCircleLine
              onClick={() => {
                setNavbar((prev) => !prev);
              }}
              className="xLogo"
            />
          ) : (
            <GiHamburgerMenu
              className="hamLogo"
              onClick={() => {
                setNavbar((prev) => !prev);
              }}
            />
          )}
          <Card setNavbar={setNavbar} navbar={navbar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
