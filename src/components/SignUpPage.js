import React from "react";
import SignUpForm from "./SignUpForm"
import "./Form.css"
function Form() {
  return (

    <div>
      <div className="title">Create an account or <span className="loginText">log in</span></div>
      <SignUpForm/>
      </div>
  );
}

export default Form;
