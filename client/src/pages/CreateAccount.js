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

  const createAcc = async () => {
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

    try {
      const login = await axios.post(
        "https://ctp-project.herokuapp.com/api/create",
        {
          email: input.email,
          password: input.password,
          firstName: input.firstName,
          lastName: input.lastName,
          phone: input.phone,
          nickName: input.nickName,
        }
      );
      alert("user created!");
    } catch (error) {
      alert("oops");
    }
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
            <input type="password" value={input.password} name="password" />
            <div className="errorMsg"></div>
            <input
              onClick={createAcc}
              type="submit"
              className="button"
              value="Register"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAccount;
