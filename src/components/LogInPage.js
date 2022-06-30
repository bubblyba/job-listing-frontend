import React from "react";
import {useNavigate} from 'react-router-dom'

import "./Form.css"
import LoginForm from "./LoginForm";
function LoginInPage() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/signup'; 
    navigate(path);
  }
  return (

    <div>
      <div className="title">Login or <button className="loginButton" onClick={routeChange}>Create an account</button></div>
      
      <LoginForm/>

      </div>
  );
}

export default LoginInPage;
