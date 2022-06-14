import React from "react";
import "./SignUpFormStyle.css"
function SignUpForm() {
    return (
      <div>
          <h1 className="signUpTitle">Sign Up</h1>
          <p className="createAccount">Create an account or log in</p>
          <form>
              <input type="text" className="emailInput" placeholder="email"></input>
              <input type="text" className="passwordInput" placeholder="password"></input>
              <input type="text" className="reenterPasswordInput" placeholder="re-enter password"></input>
              



          </form>
      </div>
    );
  }
  
  export default SignUpForm;
  