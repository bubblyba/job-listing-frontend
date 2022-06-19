import React, { useState } from "react";
import "./SignUpFormStyle.css"


async function waitForResponse(user) {
  let response = await fetch("https://job-listing-rest.herokuapp.com/api/createUser",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(user)

    })
    .then (response=>response.text())
    if(response !== "User created"){
      console.log(response)

    }
    
    else{
    console.log("User created")
    }
  
  }
function SignUpForm() {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[reType,setRetype] = useState('')
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [reTypeError, setRetypeError] = useState("");

    var userType = 0

    
    const handleClick=(e)=>{
      
      setRetypeError("")
      setEmailError("")
      setPasswordError("")

      e.preventDefault()
      if(reType !== password){
        var element =  document.getElementsByClassName("reenterPasswordInput")[0].style.border = '1px solid #EC9E58';
        var element =  document.getElementsByClassName("passwordInput")[0].style.border = '1px solid #EC9E58';
        setRetypeError("Passwords must match")
        console.log("Passwords must match")

      }
      if(email.length == 0){
        setEmailError("Please fill out email field")
        

        var element =  document.getElementsByClassName("emailInput")[0].style.border = '1px solid #EC9E58';

        console.log("Please fill out email field")

      }
      if(password.length == 0){
        var element =  document.getElementsByClassName("passwordInput")[0].style.border = '1px solid #EC9E58';
        setPasswordError("Please fill out password field")
        console.log("Please fill out password field")
      }
      else{
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
        console.log("Please fill out user type")
      }
    }
      
      
      
    }

    return (
      <div>
          <h1 className="signUpTitle">Sign Up</h1>
          <p className="createAccount">Create an account or log in</p>
          <form >
              <input type="text" className="emailInput" placeholder="email" value={email} id="emailInput" onChange={(e)=>setEmail(e.target.value)} ></input>
              <p className="emailError"> {emailError} </p>
              <input type="text" className="passwordInput" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
              <p className="passwordError"> {passwordError} </p>

              <input type="text" className="reenterPasswordInput" placeholder="re-enter password" onChange={(e)=>setRetype(e.target.value)}></input>
              <p className="reTypeError"> {reTypeError} </p>

              <label className="jobButton"><input id="job" type="radio" name="radio" value="2"></input>I want a job</label>
              <label className="hireButton"><input id="hire"type="radio" name="radio" value="1"></input>I want to hire</label>
              <input className="submitButton"type="submit" value="submit" onClick={handleClick}/>

              
               




          </form>
          
          <img className="signUpImage" src="https://i.ibb.co/MRTGZc5/Screen-Shot-2022-06-14-at-8-53-56-AM.png" alt="cartoonLogo" height="20" width="20"></img>

          
          
      </div>
      
    );

  }
  
  export default SignUpForm;
  