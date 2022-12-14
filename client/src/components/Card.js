import { GiHamburgerMenu } from "react-icons/gi";
import React, { useRef, useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Card = ({ navbar, setNavbar }) => {
  const [userObj, setuserObj] = useState({});
  const [show, showCart] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("id")) {
      setuserObj({
        username: localStorage.getItem("nickname"),
        id: localStorage.getItem("id"),
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("nickname");
    setTimeout(() => {
      window.location.href = "/";
    }, 50);
  };

  return (
    <div className={`${navbar ? "shownav" : "hidenav"}`}>
      <div className="leftside">
        <li className="nav-item ">
          <div
            onClick={() => {
              setNavbar(false);
              window.location.href = "/";
            }}
          >
            <a className="text-uppercase d-flex px-2 mx-1 text-decoration-none">
              <MdKeyboardArrowRight /> Home
            </a>
          </div>
        </li>
        <li className="nav-item ">
          <div
            onClick={() => {
              setNavbar(false);
              window.location.href = "/feed";
            }}
          >
            <a className="text-uppercase d-flex px-2 mx-1 text-decoration-none ">
              <MdKeyboardArrowRight /> FEED
            </a>
          </div>
        </li>

        {userObj.username && (
          <li className="nav-item ">
            <div
              onClick={() => {
                setNavbar(false);
                window.location.href = `/user/${userObj.id}`;
              }}
            >
              <a className="text-uppercase d-flex px-2 mx-1 text-decoration-none ">
                <MdKeyboardArrowRight /> POSTS
              </a>
            </div>
          </li>
        )}
        {userObj.username && (
          <li className="nav-item ">
            <div
              onClick={() => {
                setNavbar(false);
                window.location.href = "/new-post";
              }}
            >
              <a className="text-uppercase d-flex px-2 mx-1 text-decoration-none ">
                <MdKeyboardArrowRight /> UPLOAD
              </a>
            </div>
          </li>
        )}
        {!userObj.username && (
          <li className="nav-item ">
            <div
              onClick={() => {
                setNavbar(false);
                window.location.href = "/create";
              }}
            >
              <a className="text-uppercase d-flex px-2 mx-1 text-decoration-none ">
                <MdKeyboardArrowRight /> REGISTER
              </a>
            </div>
          </li>
        )}
        {!userObj.username && (
          <li className="nav-item ">
            <div
              onClick={() => {
                setNavbar(false);
                window.location.href = "/login";
              }}
            >
              <a className="text-uppercase d-flex px-2 mx-1 text-decoration-none">
                <MdKeyboardArrowRight />
                LOGIN
              </a>
            </div>
          </li>
        )}
        {userObj.username && (
          <li onClick={logout} className="nav-item ">
            <a className="text-uppercase d-flex px-2 mx-1 text-decoration-none">
              <MdKeyboardArrowRight />
              LOGOUT
            </a>
          </li>
        )}
      </div>
    </div>
  );
};

export default Card;
