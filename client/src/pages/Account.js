import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Img from "../Img";
import Navbar from "../components/Navbar";
import Layout from "../components/layout";
import axios from "axios";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: "dcchunhwy",
  },
});

function Account(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);

  const getPost = () => {
    axios
      .get(`https://ctp-project.herokuapp.com/api/posts/getPost/user/${id}`)
      .then((x) => {
        setData(x.data.reverse());
        isLoading(false);
        console.log(x);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cards = data.map((item) => {
    return (
      <div className="account-post">
        <Link to={`/posts/${item.id}`}>
          {item.img && item.img.substring(0, 4) == "http" ? (
            <img src={item.img} alt="" />
          ) : (
            <AdvancedImage className="img" cldImg={cld.image(`${item.img}`)} />
          )}
        </Link>
      </div>
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
          <div>
            {" "}
            <div>
              <span className="bold-header-text px-4 ">MY</span>
              <span className="regular-header-text">PAGE</span>
            </div>
            {/* <div className="about-me-block">
              <div className="account-name-block py-4">
                My name is Kristina.
              </div>
              <p className="py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <div className="py-4">
                Click{" "}
                <a href="/edit/:id" className="blue-link">
                  here
                </a>{" "}
                to edit your page.
              </div>
            </div> */}
            <div className="d-flex flex-wrap justify-between px-6 py-6 account-posts-container">
              {" "}
              {cards}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

export default Account;
