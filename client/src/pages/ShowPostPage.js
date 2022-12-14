import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import LikeButton from "../components/LikeButton";
import { useParams } from "react-router-dom";



import logo from '../assets/logo_min.png'

import Layout  from '../components/layout'

function ShowPostPage(props) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let params = useParams();

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

  return (<Layout>
  <div className="col-8 post-block text-start px-6">
      <div className="d-flex justify-between py-1">
          <div className="d-flex">
            <div className="micro-post-avatar"> 
                <img src="{props.avatar}" alt="post image"/>
            </div>
            
            <div className="px-3"> 
                <div>{props.name} {props.surname}</div>
                <div className="micro-post-date">{props.date}</div>
            </div>
          </div>

     </div>
    <div className="card mb-4 shadow micro-post-image py-4">
      <img src={props.postImage} alt="post image"/>
      
      <div className="card-body card-text">

          {props.description}
      </div>
      <div className="card-body">
      <div className="micro-post-location">{props.location}</div>
      <LikeButton></LikeButton>
      <div className="hash-tags-block">
          <a href="#">#jeans </a>
          <a href="#">#iWardrobe </a>
          <a href="#">#giveAway </a>
          </div>
          </div>
      <div className="card-footer small text-muted">
          <button>sell</button><button>exchange</button><button>giveaway</button>
      </div>

      <div className="comments-update-block px-3 py-5">
      <div className="d-flex">
            <div className="comment-post-avatar p-3"> 
                <img src="Kristina.png" alt="post image"/>
            </div>
            
            <div className=""> 
                <div>{props.name} {props.surname}</div>
                <div className="micro-post-date">{props.date}</div>
            </div>

          </div>
          <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but !!!!!
</p></div>
      </div>
      <div className="p-3 comment-block">
      <label htmlFor="" className="d-flex comment-label py-2">Write a comment</label>
            <textArea
            rows="5" cols="23"
              // onChange={}
              type="text"
              // value={}
              className="col-8"
              name="description"
            />
            <div>
          <input type="submit" value="Comment"/>
          </div>
      </div>
    </div>
  </div>
  </Layout>
  )
}

export default ShowPostPage;
