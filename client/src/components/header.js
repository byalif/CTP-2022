import React, { useState, useEffect } from "react";
import { Avatar } from "./Avatar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import data from "../data";

export default function Header() {
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
  const [username, setUsername] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setUsername(localStorage.getItem("nickname"));
    }
  });
  return (
    <header className="navbar navbar-expand-sm navbar-dark hideIt">
      <ul className="navbar-nav container-fluid p-3 align-items-center">
        <li className="nav-item col d-flex justify-content-start">
          <Link className="navbar-brand logo" to="/">
            iWardrobe
          </Link>
        </li>

        {username && (
          <li className="nav-item col">
            <NavLink
              style={{ display: "flex" }}
              className="okg nav-link logo"
              to={`/user/${localStorage.getItem("id")}`}
            >
              <p
                style={{
                  paddingTop: "28px",
                  backgroundColor: `${colors[localStorage.getItem("id") % 11]}`,
                }}
              >
                {username.substring(0, 1).toUpperCase()}
              </p>
            </NavLink>
          </li>
        )}
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
