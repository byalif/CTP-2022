import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import LikeButton from "../components/LikeButton";
import { useParams, useNavigate } from "react-router-dom";

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
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);

  const getPost = () => {
    axios
      .get(`https://ctp-project.herokuapp.com/api/posts/getPost/${id}`)
      .then((x) => {
        setPost(x.data);
        console.log(x);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     try {
  //       let response = await fetch("/api/micro_posts/" + params.id);
  //       let postData = await response.json();
  //       setPost(postData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching /api/micro_posts/" + params.id, error);
  //       setError(true);
  //     }
  //   }

  //   getData();

  //   return () => {
  //     // clean up function
  //   };
  // }, [params.id]);

  // if (error)
  //   return (
  //     <ErrorAlert details={"Micro post with id=" + params.id + " not found"} />
  //   );
  // if (loading) return <LoadingSpinner />;

  return (
    <Layout>
      <div className="col-8 post-block text-start px-6">
        <div className="d-flex justify-between py-1">
          <div className="d-flex">
            <div className="micro-post-avatar">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232"
                alt="post image"
              />
            </div>

            <div className="px-3">
              <div>
                <b>{post.title}</b> by{" "}
                <span
                  onClick={() => {}}
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
        <div className="card mb-4 shadow micro-post-image">
          <AdvancedImage className="img" src={post.img}  />
          <div className="card-body card-text">{post.description}</div>
          <div className="card-body">
            <div className="micro-post-location">{post.location}</div>
            <LikeButton></LikeButton>
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
          <div className="comments-update-block px-3 py-5">
            <div className="d-flex">
              <div className="comment-post-avatar p-3">
                <img src="Kristina.png" alt="post image" />
              </div>

              <div className="">
                <div>
                  {props.name} {props.surname}
                </div>
                <div className="micro-post-date">{props.date}</div>
              </div>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but !!!!!
              </p>
            </div>
          </div>
          <div className="p-3 comment-block">
            <label htmlFor="" className="d-flex comment-label py-2">
              Write a comment
            </label>
            <textArea
              rows="5"
              cols="23"
              // onChange={}
              type="text"
              // value={}
              className="col-8"
              name="description"
            />
            <div>
              <input type="submit" value="Comment" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ShowPostPage;
