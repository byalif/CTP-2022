import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from './Avatar'

import logo from '../assets/logo_min.png'
import postpicture from '../assets/default-post-img1.jpg'



export default function MicroPost(props) {


  return (
      
    <div className="col-6 micro-post-block text-start px-6 mb-6">
        <div className="d-flex justify-between py-1">
            <div className="d-flex">
            <div className="micro-post-avatar"> 
                <img src={props.avatar} alt="post image"/>
            </div>
            
            <div className="px-3"> 
                <div>{props.name} {props.surname}</div>
                <div className="micro-post-date">{props.date}</div>
            </div>
            </div>
            <a href="/">
                <img src={logo} className="micro-post-logo" alt="small-logo"/> 
            </a> 
       </div>
      <div className="card mb-4 shadow micro-post-image">
        <img src={props.postImage} alt="post image"/>
        
        <div className="card-body card-text">

            {props.description}
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
            <button>sell</button><button>exchange</button><button>giveaway</button>
        </div>
      </div>
    </div>
  );
}

