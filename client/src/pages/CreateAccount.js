import React, { useState } from "react";
import Img from "../Img";
import Layout from "../components/layout";
import axios from "axios";

const CreateAccount = () => {
  const [input, setInput] = useState({
    email: "",
    lastName: "",
    firstName: "",
    nickName: "",
    phone: "",
    password: "",
  });

  const createAcc = async (e) => {
    e.preventDefault();
    if (
      input.email.trim() === "" ||
      input.password.trim() === "" ||
      input.lastName.trim() === "" ||
      input.firstName.trim() === "" ||
      input.phone.trim() === "" ||
      input.nickName.trim() === ""
    ) {
      alert("No blank fields allowed!");
      return;
    }

    axios
      .post("https://ctp-project.herokuapp.com/api/users/create", {
        email: input.email,
        password: input.password,
        firstName: input.firstName,
        lastName: input.lastName,
        phone: input.phone,
        nickName: input.nickName,
      })
      .then((x) => {
        console.log("user created");
        alert("user created");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Layout>
      <div id="main-registration-container">
<<<<<<< HEAD
        <div id="register" className="d-flex justify-center">
          <form method="post" name="userRegistrationForm" > 
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-column field-box p-2">
                <label>First Name</label>
                <input
                placeholder="First Name" 
                type="text"
                onChange={onChangeHandler}
                value={input.firstName}
                name="firstName"
                />
            </div>
            <div className="d-flex flex-column field-box p-2">
                <label>Last name</label>
                    <input
                    placeholder="Last name" 
                    type="text"
                    onChange={onChangeHandler}
                    value={input.lastName}
                    name="lastName"
                    />
            </div>
            <div className="d-flex flex-column field-box p-2">
                <label>Email:</label>
                <input
                placeholder="Email" 
                type="text"
                onChange={onChangeHandler}
                value={input.email}
                name="email"
                />
            </div>
            <div className="d-flex flex-column field-box p-2">
                <label>Nickname:</label>
                <input
                placeholder="Nickname" 
                type="text"
                onChange={onChangeHandler}
                value={input.nickName}
                name="nickName"
                />
            </div>
            <div className="d-flex flex-column field-box p-2">
                <label>Mobile Phone:</label>
                <input
                placeholder="Mobile phone" 
                type="text"
                onChange={onChangeHandler}
                value={input.phone}
                name="phone"
                />
            </div>
            <div className="d-flex flex-column field-box p-2">
                <label>Password</label>
                <input type="password" value={input.password}  placeholder="Password" name="password" />
                <div className="errorMsg"></div>
            </div>
            </div>
                <input
                onClick={createAcc}
                type="submit"
                className="button m-3"
                value="Register"
                />

=======
        <div id="register">
          <h3>Create Account</h3>
          <form method="post" name="userRegistrationForm">
            <label>First Name</label>
            <input
              type="text"
              onChange={onChangeHandler}
              value={input.firstName}
              name="firstName"
            />
            <label>Last name</label>
            <input
              type="text"
              onChange={onChangeHandler}
              value={input.lastName}
              name="lastName"
            />
            <label>Email:</label>
            <input
              type="text"
              onChange={onChangeHandler}
              value={input.email}
              name="email"
            />
            <div className="errorMsg"></div>
            <label>Nickname:</label>
            <input
              type="text"
              onChange={onChangeHandler}
              value={input.nickName}
              name="nickName"
            />
            <label>Mobile No:</label>
            <input
              type="text"
              onChange={onChangeHandler}
              value={input.phone}
              name="phone"
            />
            <label>Password</label>
            <input
              type="password"
              onChange={onChangeHandler}
              value={input.password}
              name="password"
            />
            <div className="errorMsg"></div>
            <input
              onClick={createAcc}
              type="submit"
              className="button"
              value="Register"
            />
>>>>>>> cee539b15ce7b1bf2cf78ccd77be27c0939d7ace
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAccount;
