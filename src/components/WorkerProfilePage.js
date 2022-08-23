import React from "react";
import SignUpForm from "./SignUpForm"
import {useNavigate} from 'react-router-dom'

function WorkerProfilePage() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/login'; 
    navigate(path);
  }
  return (

    <div>
      <div className="title">Create an account or <button className="loginButton" onClick={routeChange}>Login</button></div>
      
    

      </div>
  );
}

export default WorkerProfilePage;
