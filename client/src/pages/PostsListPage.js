import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import Layout from "../components/layout";
import MicroPost from "../components/MicroPost";
import { Link} from "react-router-dom";
import data from "../data"
//import {DemoCarousel} from "../components/DemoCarousel";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: "dcchunhwy",
  },
});

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
            <Link to="/create"><button>Start now!</button></Link>
          </div>
        </div>
        <div className="header-partners py-3  my-5">
          <span>We partner with</span><span>&nbsp; forward-thinking&nbsp; </span><span>startups.</span>
          
        </div>
        <div className="partners-logos d-flex justify-center">
        <div className="d-flex align-items-center">
            {/* <img src="./icon.png"></img> */}
            <span className="px-2 font-normal">QCERA</span>
            </div>
          <div className="d-flex align-items-center"><img src="./icon.png"></img><span className="px-2">SECOND HAND</span></div>

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
                <MicroPost
                name="Jessica"
                location="Brooklyn, NY"
                date="12/12/2022"
                surname="Jess_NY "
                // startDate= {item.startDate}
                avatar="./default_avatar.jpg"
                description="GiveaWOW! Nice blouse. &#128512;"
                postImage="https://images.unsplash.com/photo-1587754551134-74d789c4f22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            />
                            <MicroPost
                name="James Bond"
                location="London, UK"
                date="12/12/2022"
                surname="007 "
                // startDate= {item.startDate}
                avatar="./Alif.png"
                description="How do you like my outfit? ;)"
                postImage="https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
                <MicroPost
                name="Maria M"
                location="Queens, NY"
                date="12/12/2022"
                surname="MMaria"
                // startDate= {item.startDate}
                avatar="./default_avatar.jpg"
                description="How do you like my outfit? ;)"
                postImage="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            />
                <MicroPost
                name="Kristina Korzhenevskaya"
                location="Brooklyn, NY"
                date="12/12/2022"
                surname="Korzhenevskaya "
                // startDate= {item.startDate}
                avatar="./Kristina.png"
                description="OMG! THIS BAG! SO BEAUTIFUL &#128525; &#128525; &#128525;"
                postImage="https://images.unsplash.com/photo-1591567462127-1f25099900ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1133&q=80"
            />
          </div>
        </div>
        <div className="d-flex my-5">
          <div className="section-text-block">
            <div className="section-header-promo">
              <span className="bold">Improve </span>your brand <span>with an awesome site.</span>
            </div>
            <div className="promo-text py-4"> 
                <span className="">Comprehensive </span>
                <span className="">Brand</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className="promo-text py-4">  
              <span className="">WEB </span>
              <span className="">PRESENCE</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
          </div>
          <div className="promo-block-image"> </div>
          </div>
        {/* <div>
          <div className="d-flex align-items-center py-6">
              <span className=" d-flex bold-header-text px-4 ">WHAT</span>
              <span className="d-flex regular-header-text">THEY</span>
              <span className=" d-flex bold-header-text px-4 ">THINK</span>
          </div>
   
        </div> */}
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
