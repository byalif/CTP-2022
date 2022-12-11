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
      <div className="create-post-block d-flex">
        <div style={{ width: "50%" }} >
        <label htmlFor="file-upload"  className="upload-photo-block">Drop your image here or <span className="blue-link">&nbsp; browse</span></label>
          <input  id="file-upload" type="file" name="filename"/>
        </div>
        <div style={{ width: "50%" }} className="form-post-info ">
          <div style={{ display: "Flex", flexDirection: "column" }} className="mb-4">
            {" "}
            <label htmlFor="" className="mb-1">Title</label>
            <input type="text"  placeholder="Once upon a time..." />
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }} className="mb-4">
            {" "}
            <label htmlFor="" className="mb-1">Description</label>
            <textArea type="text"  placeholder="Once upon a time..." rows="4" cols="50"/>
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }} className="mb-4">
            <label htmlFor="" className="mb-1">Location</label>
            <input type="text" placeholder="Once upon a time..."/>
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }} className="mb-4">
            <label htmlFor="" className="mb-1">HashTags</label>
            <input type="text"  placeholder="Once upon a time..."/>
          </div>
          <input type="submit"/>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
