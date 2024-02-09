import React, { useState } from 'react';
import './LoginSignup.css';
const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
        <div className="ha">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "login" ? <div></div> : <div className="input">
          <img src="person.png" alt="person name" />
          <input placeholder="NAME" type="text" />
        </div>}
        <div className="input">
          <img src="email.png" alt="email id" />
          <input placeholder="email id" type="Email" />
        </div>
        <div className="input">
          <img src="password.png" alt="password" />
          <input placeholder="password" type="PASSWORD" />
        </div>
      </div>
      {action === "sign up" ? <div></div> : <div className="forgot-password">LOST PASSWORD <span>click here!</span></div>}
      <div className="submit-container">
        <div className={action === "Login" ? "submit grey" : "submit"} onClick={() => { setAction("sign up") }}>SIGN UP</div>
        <div className={action === "sign up" ? "submit grey" : "submit"} onClick={() => { setAction("login") }}>LOGIN</div>
      </div>
      </div>
    </div>
  );
};
export default LoginSignup;
