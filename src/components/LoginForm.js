import React, { useEffect, useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import Error from "./Error";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import validator from 'validator'
import ErrorPage from "./ErrorPage";
import { useNavigate } from "react-router-dom";

    function LoginForm() {
  let navigate = useNavigate(); 
 

  async function waitForResponse(user) {
    let response = await fetch("https://job-listing-rest.herokuapp.com/api/login",{
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(user)
  
      })
      .catch((error) => {
        
        navigate("/internal")

      })
      .then (response=>response.json())
      
      if(response !== "User created"){
        if(response['username'] === "Invalid Credentials"){
        setLoginError('Invalid Credentials');
        }
        else{
            console.log(response)
        }
  
      }
      
     
    
    }
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
   
    const [passwordBorder,setPasswordBorder] = useState('2px solid black')
    const [emailBorder,setEmailBorder] = useState('2px solid black')
    const[passwordError, setPasswordError] = useState('');
    const[emailError, setEmailError] = useState('');
    const[loginError, setLoginError] = useState('');

     useEffect(() => {
      if(password.length < 6){
        setPasswordError("password must be at least 6 characters long")
        setPasswordBorder('2px solid #EC9E58');

      }
      else if(password.length === 0){
        setPasswordError('Please fill out password field')
        setPasswordBorder('2px solid #EC9E58');

      }
      else{
        setPasswordBorder('2px solid black');

        setPasswordError('')

      }
      if(validator.isEmail(email)){
        setEmailBorder('2px solid black');

        setEmailError('')
      }
      else{
        setEmailBorder('2px solid #EC9E58');

        setEmailError('Please enter a valid email')
      }
    },[password,email]);
    
    React.useEffect(() => {
      console.log("page initial render");
    }, []);
    
    
     function handleClick(e){
      setEmailError('');
      setPasswordError('');
      setEmailBorder('2px solid black');
      setPasswordBorder('2px solid black');
      setLoginError('');


      console.log("clicked")
      if(password.length < 5){
        setPasswordError("password must be at least 6 characters long")
        setPasswordBorder('2px solid #EC9E58');
      }
      e.preventDefault()
     
      
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
      
else{
    const user = {email,password}

    console.log(waitForResponse(user))

        
      
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
        <InputBox className="passwordInput" placeholder="password" value={password} id="passwordInput"  onChange={(e)=>setPassword(e.target.value)}style={{border:passwordBorder}}></InputBox>
        </div>
       
        </div>

        <div>
       

        <div>
          <Button text="Login" value="submit" onClick={handleClick}></Button>
        </div>
        <div><Error message={loginError}/></div>

        <div>
        
        </div>
        </div>

      </form>

      
      </div>
    );

  }
  
  export default LoginForm;
  