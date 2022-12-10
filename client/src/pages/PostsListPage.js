import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import Layout from "../components/layout";
import MicroPost from "../components/MicroPost";

import data from "../data"

function PostsListPage() {
  const cards = data.slice(0, 4).map(item =>{
    return(
        <MicroPost name={item.name}
            location={item.location}
            date={item.date}
            surname={item.surname}
            // startDate= {item.startDate}
            avatar={item.avatar}
            description={item.description}
            postImage={item.postImage}
            />
            )
          })

  return (
    <Layout>
        <div className="d-flex my-5">
          <div className="landing-main-image"></div>
          <div className="landing-main-text">
            <p>DON'T HIDE YOURSELF</p>
            <h1>SHARE YOUR <br></br>LOOK</h1>
            <button>Start now!</button>
          </div>
        </div>
        <div>
          <span>We partner with</span><span>forward-thinking</span><span> startups.</span>
          
        </div>
        <div className="second-landing-section">
          <div  className="text-start landing-main-text">
            <h1>WHAT IS IWARDROBE?</h1>
            <p className="text-uppercase">A new fashion-related social network</p>
            </div>
            <div className="d-flex text-start text-block">
              <div>
                <p>We want our users to express themselves and share their ideas. iWardrobe is the place where creativity begins.</p>
                <p>We also want to make this world a better place. You can exchange things you don’t need anymore through iWardrobe. </p>
                <p>You have tons of your mirror looks on your phone? It's time to show them to other people. <br></br> Share! Follow! Like! Comment! </p>
              </div>
                <div className="landing-second-image"></div>
              </div>
            </div>
        
        <div>
          <div className="d-flex align-items-center py-6">
              <span className=" d-flex bold-header-text px-4 ">OUR</span>
              <span className="d-flex regular-header-text">FEEDPAGE</span>
          </div>
          <div className="d-flex align-items-center px-6 justify-center flex-wrap py-6">
                {cards}
          </div>
        </div>
        <div>
          <div className="">
          Improve your brand with an awesome site.
          </div>
          <div> 
             <span className=" d-flex bold-header-text px-4 ">Comprehensive </span>
              <span className="d-flex regular-header-text">Brand</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div>  <span className=" d-flex bold-header-text px-4 ">WEB </span>
              <span className="d-flex regular-header-text">PRESENCE</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              <div> </div>
        </div>
        <div>
          <div className="d-flex align-items-center py-6">
              <span className=" d-flex bold-header-text px-4 ">WHAT</span>
              <span className="d-flex regular-header-text">THEY</span>
              <span className=" d-flex bold-header-text px-4 ">THINK</span>
          </div>

        </div>
      <div className="talk-pannel d-flex mb-6 align-items-center">
        <div>
          <div>            
              <span className="bold-header-text">LET'S</span>
              <span className="regular-header-text px-4">TALK</span>
          </div>
          <p>Feel free to cotact us</p>
        </div>
        <div className="circle-btn d-flex">Send<br></br> Us A <br></br> Feed Back</div>
      </div>
    </Layout>
  );
}

export default PostsListPage;
