import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import LikeButton from "../components/LikeButton";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import logo from "../assets/logo_min.png";
import axios from "axios";
import Layout from "../components/layout";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: "dcchunhwy",
  },
});

function ShowPostPage(props) {
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
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);
  const [likes, setLikes] = useState(10);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const { id } = useParams();
  const [loading, isLoading] = useState(true);

  const nav = useNavigate();
  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);

  const changeCom = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const getTme = (time) => {
    let hour = Math.round(time * 24);
    let minutes = Math.floor(time * 24 * 60);
    if (minutes > 1 && minutes < 60) return `${minutes}m`;
    else if (minutes < 1) return `${minutes}m`;
    else if (minutes == 1) return `${minutes}m`;
    else if (hour >= 24) return `${Math.ceil(time)}d`;
    return `${hour}h`;
  };

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
    if (localStorage.getItem("id") && id) {
      axios
        .post(`https://ctp-project.herokuapp.com/api/posts/like`, {
          postId: id,
          userId: localStorage.getItem("id"),
        })
        .then((x) => {
          console.log(x);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location("/login");
    }
  };

  const newComment = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("id")) {
      window.location("/login");
    } else if (input.trim !== "" && localStorage.getItem("id") && id) {
      let tmp = comments;
      tmp.unshift({
        username: localStorage.getItem("nickname"),
        id: localStorage.getItem("id"),
        comment: input,
      });
      setComments(tmp);

      axios
        .post(`https://ctp-project.herokuapp.com/api/posts/comment`, {
          comment: input,
          userId: localStorage.getItem("id"),
          postId: id,
          nickname: localStorage.getItem("nickname"),
        })
        .then((x) => {
          setInput("");
          console.log(x);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (input.trim == "" && localStorage.getItem("id") && id) {
      alert("Enter a comment!");
    } else if (!localStorage.getItem("id") || !id) {
      window.location("/");
    }
  };

  const deletePost = () => {
    axios
      .post(`https://ctp-project.herokuapp.com/api/posts/delete/${post.id}`)
      .then((x) => {
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPost = () => {
    axios
      .get(`https://ctp-project.herokuapp.com/api/posts/getPost/${id}`)
      .then((x) => {
        x.data.Likes.map((x) => {
          let myId = localStorage.getItem("id");
          if (myId && myId == x.UserId) {
            setIsClicked(true);
          }
        });
        setPost(x.data);
        isLoading(false);
        setLikes(x.data.Likes.length);
        setComments(x.data.Comments.reverse());
        console.log(x);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <Layout>
        {loading ? (
          <div
            className="loading2"
            style={{
              textAlign: "left",
              padding: "10px",
              marginLeft: "10px",
              height: "100vh",
              fontSize: "16px",
              fontWeight: "300",
              letterSpacing: "1px",
            }}
          >
            Loading
          </div>
        ) : (
          <div className="post-block text-start px-6">
            <div className="d-flex justify-between py-1">
              <div className="d-flex">
                <div
                  onClick={() => {
                    nav(`/user/${post.UserId}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="micro-post-avatar"
                >
                  <p style={{ backgroundColor: `${colors[post.id % 11]}` }}>
                    {post.surname.substring(0, 1).toUpperCase()}
                  </p>
                </div>
                <div className="px-3">
                  <div>
                    <b>{post.title}</b> by{" "}
                    <span
                      onClick={() => {
                        nav(`/user/${post.UserId}`);
                      }}
                      style={{ cursor: "pointer", color: "#1a23c9" }}
                    >
                      @{post.surname}
                    </span>
                  </div>
                  <div className="micro-post-date">
                    {new Date(post.createdAt).toDateString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4 shadow micro-post-image py-4">
              {post.img && post.img.substring(0, 4) == "http" ? (
                <img src={post.img} alt="" />
              ) : (
                <AdvancedImage
                  className="img"
                  cldImg={cld.image(`${post.img}`)}
                />
              )}

              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="card-body card-text"
              >
                <div>{post.description}</div>
                {localStorage.getItem("id") == post.UserId && (
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
                <div className="micro-post-location">{post.location}</div>
                <div
                  className={`like-button d-flex ${isClicked && "liked"}`}
                  onClick={handleClick}
                >
                  <span className="">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                    </svg>
                  </span>
                  <span className="likes-counter px-2">{`${
                    likes != 1 ? "Likes" : "Like"
                  } | ${likes}`}</span>
                </div>
                <div className="hash-tags-block">
                  <a href="#">#jeans </a>
                  <a href="#">#iWardrobe </a>
                  <a href="#">#giveAway </a>
                </div>
              </div>
              <div
                style={{ marginBottom: "-35px" }}
                className="card-footer small text-muted"
              >
                <button>sell</button>
                <button>exchange</button>
                <button>giveaway</button>
              </div>
              <div className="comments-update-block px-3 py-5">
                <div className="d-flex">
                  <div className="">
                    <div>
                      {props.name} {props.surname}
                    </div>
                    <div className="micro-post-date">{props.date}</div>
                  </div>
                </div>
                <div className="commentBox">
                  <div className="titleCom">Comments</div>
                  {Array.isArray(comments) &&
                    comments.map((x) => {
                      return (
                        <div style={{ display: "flex" }}>
                          <span
                            onClick={() => {
                              window.location(`/user/${x.id}`);
                            }}
                            style={{ cursor: "pointer", color: "#1a23c9" }}
                          >
                            @{x.username}
                          </span>
                          <p style={{ marginLeft: "8px" }}>{x.comment}</p>
                        </div>
                      );
                    })}
                  {comments.length == 0 && (
                    <div style={{ fontWeight: "300" }}>No comments yet.</div>
                  )}
                </div>
              </div>
              <div className="p-3 comment-block">
                <label htmlFor="" className="d-flex comment-label py-2">
                  Write a comment
                </label>
                <textArea
                  rows="5"
                  cols="23"
                  onChange={changeCom}
                  type="text"
                  value={input}
                  style={{ width: "100%" }}
                  name="description"
                />
                <div>
                  <button onClick={newComment}>Comment</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

export default ShowPostPage;
