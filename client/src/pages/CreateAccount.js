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

          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAccount;
