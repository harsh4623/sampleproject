// import logo from './logo.svg';
import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/NoteState";
import { Alert } from "./component/Alert";
import { Login } from "./component/Login";
import { SignUp } from "./component/SignUp";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Login key="logins" />} />
              <Route exact path="/home" element={<Home key="home" />} />
              <Route exact path="/about" element={<About key="about" />} />
              <Route exact path="/login" element={<Login key="login" />} />
              <Route exact path="/signup" element={<SignUp key="signup" />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
