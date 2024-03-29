import './App.css';
import SignUpPage from "./components/SignUpPage"
import LoginInPage from './components/LogInPage';
import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import ServerError from './components/ServerError';
import DashboardPage from './components/DashboardPage';
import WorkerProfilePage from './components/WorkerProfilePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginInPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="workerProfile" element={<WorkerProfilePage/>} />
        <Route path="/error" element={<ErrorPage/>}/>
        <Route path="/internal" element={<ServerError/>}/>

        <Route path="*" element={<ErrorPage message="page not found"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
