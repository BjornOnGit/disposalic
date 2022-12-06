import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [residence, setResidence] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="signup">
      <div className="signup-container">
        <div>
          <h1>Create account</h1>
        </div>
        <form className="form">
          <div className=" item fullName-container">
            <PersonOutlineIcon />
            <input
              type={"text"}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="fullName"
              placeholder="Full Name"
            />
          </div>

          <div className=" item phoneNumber-container">
            <PhoneOutlinedIcon />
            <input
              type={"tel"}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="phoneNumber"
              placeholder="Phone Number"
            />
          </div>

          <div className="item residential-container">
            <HomeOutlinedIcon />
            <input
              type={"text"}
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              className="residential"
              placeholder="Residential Address"
            />
          </div>

          <div className="item password-container">
            <LockOutlinedIcon />
            <input
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
              placeholder="Password"
            />
          </div>

          <div className="item confirmPassword-container">
            <LockOutlinedIcon />
            <input
              type={"text"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </form>

        <div className="register">
          <Button fullWidth>Register</Button>
        </div>

        <div className="already">
          <div>
            <b>Already have an account? </b> <a href="#"> Log in</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
