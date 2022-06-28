import React, { useEffect, useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import Error from "./Error";
import { RadioGroup, RadioButton } from 'react-radio-buttons';


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
   
    const [passwordBorder,setPasswordBorder] = useState('2px solid black')
    const [reenterBorder,setReenterBorder] = useState('2px solid black')
    const [emailBorder,setEmailBorder] = useState('2px solid black')
    const[radioColor,setRadioColor] = useState('rgb(158, 158, 158)')
    const [jobType,setJobType] = useState(0)
    const[passwordError, setPasswordError] = useState('');
    const[emailError, setEmailError] = useState('');
    const[reenterPasswordError, setReenterPasswordError] = useState('');
    const[userTypeError, setUserTypeError] = useState('');

    var userType = 0
    React.useEffect(() => {
      console.log("page initial render");
    }, []);
    
    function handleRadio(value){
      setJobType(value)
    }
    
     function handleClick(e){
      setEmailError('');
      setPasswordError('');
      setReenterPasswordError('');
      setEmailBorder('2px solid black');
      setReenterBorder('2px solid #black');
      setPasswordBorder('2px solid black');
      setUserTypeError('')


      console.log("clicked")
      
      e.preventDefault()
      if(reType == password){
        setReenterBorder('2px solid black');

      }
      if(reType !== password){
        
        setPasswordBorder('2px solid #EC9E58');
        setReenterBorder('2px solid #EC9E58');
        setReenterPasswordError("Passwords must match")
        console.log("Passwords must match")

      }
      if(email.length == 0){
        setEmailBorder('2px solid #EC9E58');
        setEmailError("Please fill out email field")
        console.log("Please fill out email field")


      }
      if(password.length == 0){

        setPasswordBorder('2px solid #EC9E58');
        setPasswordError("Please fill out password field")
        console.log("Please fill out password field")


      }
      

        
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
        setRadioColor('#EC9E58')
        console.log("color changed")
        setUserTypeError("Please fill out user type")
        console.log("Please fill out user type")
      }
     


    
      
    
      
    }


    return (
      
      <div>
              

      <form>
      <div className="form">
      <div><Error message={emailError}/></div>

        <div>
        <InputBox className="emailInput" placeholder="email" value={email} id="emailInput" onChange={(e)=>setEmail(e.target.value)} style={{border:emailBorder}}></InputBox>
        </div>
        </div>

        <div>
        <div><Error message={passwordError}/></div>

        <div>
        <InputBox className="passwordInput" placeholder="password" value={password} id="passwordInput" onChange={(e)=>setPassword(e.target.value)} style={{border:passwordBorder}}></InputBox>
        </div>
        <div><Error message={reenterPasswordError}/></div>

        <div>
        <InputBox className="reenterPasswordInput" placeholder="re-enter password" value={password} id="reenterInput" onChange={(e)=>setRetype(e.target.value)} style={{border:reenterBorder}}></InputBox>
        
        </div>
        </div>

        <div>
        <div style={{width:"118%"}}>
        <RadioGroup onChange={handleRadio} horizontal>
  <RadioButton value="2" pointColor="black" rootColor={radioColor}>
    I want a job
  </RadioButton>
  <RadioButton value="1" pointColor="black" rootColor={radioColor}>
    I want to hire
  </RadioButton>
      </RadioGroup>
        </div>
        <div><Error message={userTypeError}/></div>

        <div>
          <Button text="Sign Up" value="submit" onClick={handleClick}></Button>
        </div>
        <div>
        
        </div>
        </div>

      </form>

      
      </div>
    );

  }
  
  export default SignUpForm;
  