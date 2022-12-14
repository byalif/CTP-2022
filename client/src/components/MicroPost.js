import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar } from "./Avatar";

import logo from "../assets/logo_min.png";
import postpicture from "../assets/default-post-img1.jpg";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export default function MicroPost(props) {
  return (
    <div className="col-6 micro-post-block text-start px-6 mb-6">
      <div className="d-flex justify-between py-1">
        <div className="d-flex">
          <div className="micro-post-avatar">
          <img
        src={props.avatar}
        
        onError={(e) =>
          (e.target.onerror = null)(
            (e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
          )
        }
      />
          </div>

          <div className="px-3">
            <div>
              <b>{props.name}</b> by{" "}
              <span
                onClick={() => {}}
                style={{ cursor: "pointer", color: "#1a23c9" }}
              >
                @{props.surname}
              </span>
            </div>
            <div className="micro-post-date">
              {new Date(props.date).toDateString()}
            </div>
          </div>
        </div>
        <a href="/">
          <img src={logo} className="micro-post-logo" alt="small-logo" />
        </a>
      </div>
      <div className="card mb-4 shadow micro-post-image">
        <Link to={`/posts/${props.id}`}>
          <AdvancedImage className="img" src={props.postImage} />
        </Link>

        <div className="card-body card-text">{props.description}</div>
        <div className="card-body">
          <div className="micro-post-location">{props.location}</div>
          <div className="hash-tags-block">
            <a href="#">#jeans </a>
            <a href="#">#iWardrobe </a>
            <a href="#">#giveAway </a>
          </div>
        </div>
        <div className="card-footer small text-muted">
          <button>sell</button>
          <button>exchange</button>
          <button>giveaway</button>
        </div>
      </div>
    </div>
  );
}
