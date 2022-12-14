import React, { useEffect, useState } from "react";
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
  const [file, setFile] = useState("No files added");
  const [data, setData] = useState(new FormData());
  useEffect(() => {
    if (data.get("file")) {
      let vari = data.get("file").name;
      if (vari.length >= 15) {
        vari = data.get("file").name.substring(0, 12) + "...";
      }
      setFile(vari);
    }
  }, [data]);
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
                surname: localStorage.getItem("nickname"),
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
      <div
        style={{ display: "Flex", padding: "25px" }}
        className="create-post-block"
      >
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
                      paddingBottom: "40px",
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
          <div
            style={{
              fontWeight: "300",
            }}
          >
            {file}
          </div>
        </div>

        <div style={{ width: "50%" }} className="form-post-info">
          <div
            style={{ display: "Flex", flexDirection: "column" }}
            className="mb-4"
          >
            {" "}
            <label htmlFor="" className="mb-1">
              Title
            </label>
            <input
              onChange={changeIt}
              value={postBody.title}
              name="title"
              type="text"
            />
          </div>
          <div
            style={{ display: "Flex", flexDirection: "column" }}
            className="mb-4"
          >
            {" "}
            <label htmlFor="" className="mb-1">
              Description
            </label>
            <textArea
              onChange={changeIt}
              type="text"
              value={postBody.description}
              name="description"
            />
          </div>
          <div
            style={{ display: "Flex", flexDirection: "column" }}
            className="mb-4"
          >
            <label htmlFor="" className="mb-1">
              Location
            </label>
            <input
              value={postBody.location}
              name="location"
              onChange={changeIt}
              type="text"
            />
          </div>
          <div
            style={{ display: "Flex", flexDirection: "column" }}
            className="mb-4"
          >
            <label htmlFor="" className="mb-1">
              HashTags
            </label>
            <input onChange={changeIt} type="text" />
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "Flex",
              flexDirection: "column",
            }}
          >
            <input type="submit" onClick={postImage} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
