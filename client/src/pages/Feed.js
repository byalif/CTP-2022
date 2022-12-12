import React, { useEffect } from "react";
import Img from "../Img";
import Layout from "../components/layout";
import MicroPost from "../components/MicroPost";

import data from "../data";

function Feed(props) {
  const cards = data.map((item) => {
    return (
      <MicroPost
        name={item.name}
        location={item.location}
        date={item.date}
        surname={item.surname}
        // startDate= {item.startDate}
        avatar={item.avatar}
        description={item.description}
        postImage={item.postImage}
      />
    );
  });
  return (
    <Layout>
      <div className="d-flex align-items-center px-6 justify-center flex-wrap py-6">
        {cards}
      </div>
    </Layout>
  );
}

export default Feed;
