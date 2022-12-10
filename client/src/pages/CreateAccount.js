import React from "react";
import Img from "../Img";
import Layout from "../components/layout";

const CreateAccount = () => {
  const createAcc = () => {
    alert("hi");
  };
  return (
    <Layout>
      <div id="main-registration-container">
        <div id="register">
          <h3>Create Account</h3>
          <form method="post" name="userRegistrationForm">
            <label>Name</label>
            <input type="text" name="username" />
            <label>Last name</label>
            <input type="text" name="lastname" />
            <label>Email:</label>
            <input type="text" name="emailid" />
            <div className="errorMsg"></div>
            <label>Nickname:</label>
            <input type="text" name="nickname" />
            <label>Mobile No:</label>
            <input type="text" name="mobileno" />
            <label>Password</label>
            <input type="password" name="password" />
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
