import React, { useState } from "react";
import "./LoginSignup.css";
import 'font-awesome/css/font-awesome.min.css'; // Make sure to import Font Awesome

function LoginSignup() {
    const [action,setAction]= useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="Name" />
        </div>}
        

        <div className="input">
          <i className="fa fa-envelope"></i>
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <i className="fa fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">
        Forgot password? <span>Click Here!</span>
      </div>}
     
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"Submit"} onClick={()=>{setAction("Login")}} >Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;