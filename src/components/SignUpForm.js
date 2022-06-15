import React, { useState } from "react";
import "./SignUpFormStyle.css"


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
    var userType = 0
    var errorElement = ""
    var emailError = "";

    
    const handleClick=(e)=>{
      let messages = []
      
      if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
      }

      else{
      e.preventDefault()
      if(document.getElementById('job').checked) {
        userType = 2
        const user = {email,password,userType}
      waitForResponse(user)
      }
      else if(document.getElementById('hire').checked){
        userType = 1
        const user = {email,password,userType}
      waitForResponse(user)
      }
      else{
        console.log("please fill out user type")
      }
      
      }
    }

    return (
      <div>
          <h1 className="signUpTitle">Sign Up</h1>
          <p className="createAccount">Create an account or log in</p>
          <form >
              <input type="text" className="emailInput" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
              {emailError}
              <input type="text" className="passwordInput" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
              <input type="text" className="reenterPasswordInput" placeholder="re-enter password" ></input>
              <label className="jobButton"><input id="job" type="radio" name="radio" value="2"></input>I want a job</label>
              <label className="hireButton"><input id="hire"type="radio" name="radio" value="1"></input>I want to hire</label>
              <input className="submitButton"type="submit" value="submit" onClick={handleClick}/>

              
               




          </form>
          
          <img className="signUpImage" src="https://i.ibb.co/MRTGZc5/Screen-Shot-2022-06-14-at-8-53-56-AM.png" alt="cartoonLogo" height="20" width="20"></img>

          
          
      </div>
      
    );

  }
  
  export default SignUpForm;
  