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
              <input type="radio" name="size" id="size_2" value="small" />
 <label for="size_2">Water</label>

 <input type="radio" name="size" id="size_3" value="small" />
 <label for="size_3">Beer</label>



          </form>
      </div>
    );
  }
  
  export default SignUpForm;
  