import React, { useState } from "react";
import "./SignUpFormStyle.css"

import cartoon from "/Users/atulraman/Downloads/JobListingFrontend/job-listing-frontend/src/images/Screen Shot 2022-06-14 at 8.53.56 AM.png"
async function waitForResponse(user) {
  let response = await fetch("https://job-listing-rest.herokuapp.com/api/createUser",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(user)

    })
    .then (response=>response.text())
    console.log(response)
  
  }
function SignUpForm() {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const userType = 1
    
    const handleClick=(e)=>{

      e.preventDefault()
      const user = {email,password,userType}
      waitForResponse(user)
          
    
    
    
    
        
      
    }

    return (
      <div>
          <h1 className="signUpTitle">Sign Up</h1>
          <p className="createAccount">Create an account or log in</p>
          <form >
              <input type="text" className="emailInput" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
              <input type="text" className="passwordInput" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
              <input type="text" className="reenterPasswordInput" placeholder="re-enter password"></input>
              <label className="jobButton"><input type="radio" name="radio" value="2"></input>I want a job</label>
              <label className="hireButton"><input type="radio" name="radio" value="1"></input>I want to hire</label>
              <input className="submitButton"type="submit" value="submit" onClick={handleClick}/>

              
               




          </form>
          
          <img className="signUpImage" src={cartoon} alt="cartoonLogo" height="20" width="20"></img>

          
          
      </div>
      
    );

  }
  
  export default SignUpForm;
  