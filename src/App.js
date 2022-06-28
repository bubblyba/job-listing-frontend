import './App.css';
import SignUpPage from "./components/SignUpPage"
import LoginInPage from './components/LogInPage';
import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginInPage/>}/>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
