import React, { useState } from "react";
import Layout from "../components/layout";

const CreatePost = () => {
  const [postBody, setBody] = useState({
    title: "",
    img: "",
    description: "",
    location: "",
  });
  const changeIt = (e) => {
    setBody({
      ...postBody,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Layout>
      <div style={{ display: "Flex", padding: "25px" }}>
        <div style={{ width: "50%" }}>
          <input type="file" name="filename" />
        </div>
        <div style={{ width: "35%" }}>
          <div style={{ display: "Flex", flexDirection: "column" }}>
            {" "}
            <label htmlFor="">Title</label>
            <input type="text" />
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }}>
            {" "}
            <label htmlFor="">Description</label>
            <textArea type="text" />
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }}>
            <label htmlFor="">Location</label>
            <input type="text" />
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }}>
            <label htmlFor="">HashTags</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
