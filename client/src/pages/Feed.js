import React, { useEffect, useState } from "react";
import Img from "../Img";
import Layout from "../components/layout";
import MicroPost from "../components/MicroPost";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import axios from "axios";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dcchunhwy",
  },
});

function Feed(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://ctp-project.herokuapp.com/api/posts/getAll")
      .then((x) => {
        setData(x.data);
        console.log(x);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const cards = data.map((item) => {
    let img = cld.image(`${item.img}`);
    return (
      <MicroPost
        id={item.id}
        name={item.title}
        surname={item.surname}
        location={item.location}
        date={item.createdAt}
        description={item.description}
        postImage={img}
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
