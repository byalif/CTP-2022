import React from "react";
import Img from '../Img'
import Layout  from '../components/layout'

import data from "../data";

function Account(props) {
    const cards = data.map((item) => {
        return (
            
            <div className="account-post">
                <a href="#" className="my-3">
                <img src={item.postImage}></img>
                </a>
            </div>
        //   <MicroPost
        //     name={item.name}
        //     location={item.location}
        //     date={item.date}
        //     surname={item.surname}
        //     // startDate= {item.startDate}
        //     avatar={item.avatar}
        //     description={item.description}
        //     
        //   />
        );
      });

  return (
    <Layout>
        <div><span className="bold-header-text px-4 ">MY</span><span className="regular-header-text">PAGE</span></div>
        <div className="about-me-block">
        <div className="account-name-block py-4">My name is Kristina.</div>
        <p className="py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <div className="py-4">Click <a href="/edit/:id" className="blue-link">here</a> to edit your page.</div>
        </div>
        <div className="d-flex flex-wrap justify-between px-6 py-6 account-posts-container"> {cards}</div> 
     
    </Layout>
  );
}

export default Account;
