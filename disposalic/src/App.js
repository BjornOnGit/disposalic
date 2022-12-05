import React from "react";
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SigniUp from "./pages/SignUp";
import Verification from "./pages/Verification";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SigniUp />} />
        <Route path="verification" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default App;
