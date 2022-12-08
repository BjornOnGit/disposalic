import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button } from "@mui/material";

const SignIn = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="signin">
      <div className="signin-container">
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
        </form>

        <div className="register">
          <Button fullWidth onClick={() => navigate("/home")}>
            Log in
          </Button>
        </div>

        <div className="already">
          <div>
            <b>Don't have an account? </b> <Link to="/"> Sign up in</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
