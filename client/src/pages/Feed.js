import React, { useEffect, useState } from "react";
import Img from "../Img";
import Layout from "../components/layout";
import MicroPost from "../components/MicroPost";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import Navbar from "../components/Navbar.js";
import axios from "axios";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dcchunhwy",
  },
});

function Feed(props) {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://ctp-project.herokuapp.com/api/posts/getAll")
      .then((x) => {
        isLoading(false);
        setData(x.data.reverse());
        console.log(x);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const cards = data.map((item) => {
    // let img = cld.image(`${item.img}`);
    return (
      <MicroPost
        userId={item.UserId}
        id={item.id}
        name={item.title}
        surname={item.surname}
        location={item.location}
        date={item.createdAt}
        description={item.description}
        postImage={item.img}
      />
    );
  });
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
          //d-flex align-items-center px-6 justify-center flex-wrap py-6
          <div className="ab">{cards}</div>
        )}
      </Layout>
    </>
  );
}

export default Feed;
