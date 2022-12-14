import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import Layout from "../components/layout";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const register = () => {
    navigate("/create");
  };

  const logInUser = async () => {
    if (input.email.trim() === "" || input.password.trim() === "") {
      alert("No blank fields allowed!");
      return;
    }

    axios
      .post("https://ctp-project.herokuapp.com/api/users/login", {
        email: input.email,
        password: input.password,
      })
      .then((x) => {
        console.log(x);
        localStorage.setItem("nickname", x.data.nickName);
        localStorage.setItem("id", x.data.userId);
        setTimeout(() => {
          navigate("/feed");
        }, 200);
      })
      .catch((err) => {
        alert("wrong password");
      });
  };

  const changeTXT = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <Layout>
        <MDBContainer
          fluid
          className="p-3 my-5 login-form d-flex justify-center"
        >
          <MDBRow style={{ maxWidth: "500px", width: "80%" }}>
            <MDBCol col="12" md="12" className="flex-wrap d-flex">
              <MDBInput
                label="Email address"
                name="email"
                onChange={changeTXT}
                value={input.email}
                wrapperClass="mb-4 col-12 d-flex flex-column-reverse flex-column text-start"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                name="password"
                onChange={changeTXT}
                value={input.password}
                wrapperClass="mb-4 col-12 d-flex flex-column-reverse flex-column text-start"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />


              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me "
                />
                <a href="!#" className="mx-3">
                  {" "}
                  Forgot password?
                </a>
              </div>

              <MDBBtn onClick={logInUser} className="mb-4 w-100" size="lg">
                Sign in
              </MDBBtn>
              <MDBBtn onClick={register} className="mb-4 w-100" size="lg">
                Register
              </MDBBtn>

              {/* 
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div> */}
              {/* 
            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#3b5998" }}
            >
              <MDBIcon fab icon="facebook-f" className="mx-2" />
              Continue with facebook
            </MDBBtn>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#55acee" }}
            >
              <MDBIcon fab icon="twitter" className="mx-2" />
              Continue with twitter
            </MDBBtn> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  );
}

export default Login;
