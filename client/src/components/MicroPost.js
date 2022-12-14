import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar } from "./Avatar";
import axios from "axios";
import logo from "../assets/logo_min.png";
import postpicture from "../assets/default-post-img1.jpg";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: "dcchunhwy",
  },
});

export default function MicroPost(props) {
  const nav = useNavigate();
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

  const deletePost = () => {
    axios
      .post(`https://ctp-project.herokuapp.com/api/posts/delete/${props.id}`)
      .then((x) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col-114 text-start px-6 mb-6">
      <div className="d-flex justify-between py-1">
        <div className="d-flex">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              nav(`/user/${props.userId}`);
            }}
            className="micro-post-avatar"
          >
            <p style={{ backgroundColor: `${colors[props.id % 11]}` }}>
              {props.surname.substring(0, 1).toUpperCase()}
            </p>
          </div>

          <div className="px-3">
            <div>
              <b>{props.name}</b> by{" "}
              <span
                onClick={() => {
                  nav(`/user/${props.userId}`);
                }}
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
          {props.postImage && props.postImage.substring(0, 4) == "http" ? (
            <img style={{ maxHeight: "500px" }} src={props.postImage} alt="" />
          ) : (
            <AdvancedImage
              style={{ maxHeight: "500px" }}
              className="img"
              cldImg={cld.image(`${props.postImage}`)}
            />
          )}
        </Link>

        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="card-body card-text"
        >
          <div>{props.description}</div>
          {localStorage.getItem("id") == props.userId && (
            <div
              onClick={deletePost}
              style={{
                cursor: "pointer",
                backgroundColor: "#315478",
                borderRadius: "20px",
                padding: "3px 10px 3px 10px",
                color: "white",
                fontWeight: "300",
              }}
            >
              Delete
            </div>
          )}
        </div>
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
