import React from 'react'
import { Avatar } from './Avatar'
import { Link, NavLink } from "react-router-dom";
import data from "../data"


export default function Header() {
    return(
    <header className="navbar navbar-expand-sm navbar-dark">
      <ul className="navbar-nav container-fluid row p-3 align-items-center">
      <li className="nav-item col d-flex justify-content-start">
        <Link className="navbar-brand logo" to="/">
          iWardrobe
        </Link>
        </li>
        
          {/* <li className="nav-item">
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
            <Avatar avatar={data[0].avatar}/>
            </NavLink>
          </li>
          <li className="nav-item col d-flex justify-content-end">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>

    </header>
    )
}