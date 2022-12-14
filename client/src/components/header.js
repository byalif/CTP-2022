import React, { useState, useEffect } from "react";
import { Avatar } from "./Avatar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import data from "../data";

export default function Header() {
  const [username, setUsername] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setUsername(localStorage.getItem("nickname"));
    }
  });
  return (
    <header className="navbar navbar-expand-sm navbar-dark">
      <ul className="navbar-nav container-fluid p-3 align-items-center">
        <li className="nav-item col d-flex justify-content-start">
          <Link className="navbar-brand logo" to="/">
            iWardrobe
          </Link>
        </li>
        {/* 
        <li className="nav-item">
          <NavLink className="nav-link" to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about-us">
            About Us
          </NavLink>
        </li> */}

        <li className="nav-item col">
          <NavLink className="nav-link logo" to="/">
            <Avatar avatar={data[0].avatar} />
          </NavLink>
        </li>
        <li className="nav-item col d-flex justify-content-end">
          <NavLink className="nav-link" to="/">
            {username ? `Hello, ${username}` : ""}
          </NavLink>
        </li>
        <li className="nav-item col d-flex justify-content-end">
          <NavLink
            to={`${username ? "/new-post" : "/login"}`}
            className="nav-link"
          >
            {username ? `Upload Post` : "Login"}
          </NavLink>
        </li>
        <li className="nav-item col d-flex justify-content-end">
          <NavLink
            onClick={() => {
              localStorage.removeItem("id");
              localStorage.removeItem("nickname");
              window.location("/");
            }}
            className="nav-link"
          >
            {username ? `Logout` : ""}
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
