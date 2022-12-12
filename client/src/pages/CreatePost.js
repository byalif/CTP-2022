import React, { useState } from "react";
import Layout from "../components/layout";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const CreatePost = () => {
  const [data, setData] = useState(new FormData());
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
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "bzmruulb");
    setData(formData);
  };

  const postImage = () => {
    if (data.get("file") && localStorage.getItem("id")) {
      fetch(`https://api.cloudinary.com/v1_1/dcchunhwy/image/upload`, {
        method: "POST",
        body: data,
      })
        .then((res) => {
          return res.json();
        })
        .then((theIMG) => {
          if (theIMG.public_id != "") {
            console.log(theIMG);
            axios
              .post(`https://ctp-project.herokuapp.com/api/posts/upload`, {
                ...postBody,
                img: theIMG.public_id,
                id: localStorage.getItem("id"),
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    }
  };

  return (
    <Layout>
      <div style={{ display: "Flex", padding: "25px" }}>
        <div
          style={{
            marginTop: "80px",
            padding: "30px",
            width: "50%",
          }}
        >
          <div class="upload-files-container">
            <div class="drag-file-area">
              <label class="label">
                <span class="browse-files">
                  {" "}
                  <input
                    onChange={(e) => {
                      uploadImage(e.target.files);
                    }}
                    type="file"
                    class="default-file-input"
                  />{" "}
                  <span
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#e6e6e6",
                      padding: "30px",
                      borderRadius: "50px",
                      letterSpacing: "1px",
                      fontWeight: "300",
                      fontSize: "30px",
                    }}
                    class="browse-files-text"
                  >
                    Upload file
                  </span>{" "}
                </span>{" "}
              </label>
            </div>
          </div>
        </div>
        <div style={{ width: "35%" }}>
          <div style={{ display: "Flex", flexDirection: "column" }}>
            {" "}
            <label htmlFor="">Title</label>
            <input onChange={changeIt} value={postBody.title} name="title" />
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }}>
            {" "}
            <label htmlFor="">Description</label>
            <textArea
              onChange={changeIt}
              type="text"
              value={postBody.description}
              name="description"
            />
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }}>
            <label htmlFor="">Location</label>
            <input
              value={postBody.location}
              name="location"
              onChange={changeIt}
              type="text"
            />
          </div>
          <div style={{ display: "Flex", flexDirection: "column" }}>
            <label htmlFor="">HashTags</label>
            <input onChange={changeIt} type="text" />
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "Flex",
              flexDirection: "column",
            }}
          >
            <button onClick={postImage}>Upload</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
