import React, { useEffect, useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import Error from "./Error";
import { RadioGroup, RadioButton } from 'react-radio-buttons';


async function waitForResponse(user) {
  let response = await fetch("http://localhost:8080/api/createUser",{
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
   
    const [passwordBorder,setPasswordBorder] = useState('2px solid black')
    const [reenterBorder,setReenterBorder] = useState('2px solid black')
    const [emailBorder,setEmailBorder] = useState('2px solid black')
    const [jobType,setJobType] = useState(0)

    var errors = [];

    var userType = 0
    
    
    function handleRadio(value){
      setJobType(value)
    }
    const handleClick=(e)=>{
      

      e.preventDefault()
      if(reType !== password){
        setPasswordBorder('2px solid #EC9E58');
        setReenterBorder('2px solid #EC9E58');
        errors.push("Passwords must match");
        console.log("Passwords must match")

      }
      if(email.length == 0){
        errors.push("Please fill out email field");
        setEmailBorder('2px solid #EC9E58');

        console.log("Please fill out email field")



      }
      if(password.length == 0){
        errors.push("Please fill out password field");

        setPasswordBorder('2px solid #EC9E58');

        console.log("Please fill out password field")
      }
      else{
      if(jobType == 2) {
        userType = 2
        const user = {email,password,userType}
        waitForResponse(user)
      }
      else if(jobType == 1){
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
      <form>
      <div className="form">
        <div>
        <InputBox className="emailInput" placeholder="email" value={email} id="emailInput" onChange={(e)=>setEmail(e.target.value)} style={{border:emailBorder}}></InputBox>
        </div>
        <div>
        <InputBox className="passwordInput" placeholder="password" value={password} id="passwordInput" onChange={(e)=>setPassword(e.target.value)} style={{border:passwordBorder}}></InputBox>
        </div>

        <div>
        <InputBox className="reenterPasswordInput" placeholder="re-enter password" value={password} id="reenterInput" onChange={(e)=>setRetype(e.target.value)} style={{border:reenterBorder}}></InputBox>
        
        </div>
        <div style={{width:"120%"}}>
        <RadioGroup onChange={handleRadio} horizontal>
  <RadioButton value="2" pointColor="black">
    I want a job
  </RadioButton>
  <RadioButton value="1" pointColor>
    I want to hire
  </RadioButton>
      </RadioGroup>
        </div>
        <div>
          <Button text="submit" value="submit" onClick={handleClick}></Button>
        </div>
        </div>
      </form>
      
    );

  }
  
  export default SignUpForm;
  