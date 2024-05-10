import React, { useState, useEffect } from 'react';
import LoginIMg from '../assets/img/loginIMG.png';
import LogoMark from '../assets/img/Logomark.png';
import FlexImg from '../assets/img/a829cc1e-700a-48aa-baad-963b2d9f6080 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import usePasswordToggle from '../hooks/usePasswordToggle';

const LogIn = () => {
  const [passwordInputType, ToggleIcon] = usePasswordToggle();
  return (
    <div className="LoginPg">
      <div className="logInImgContainer">
        <img src={LoginIMg} alt="" className="logINImage" />
        <img src={FlexImg} alt="" className="FlexImg" />
        <h5 className="WelcomeMsg">
          Welcome To The Department Of Mechatronics Engineering
        </h5>
      </div>
      <div className="LogInSpaceDetails">
        <img src={LogoMark} alt="" className="loginLogo" />
        <h2 className="LogInText" style={{ color: '#09645B' }}>
          Log Into Your Account
        </h2>
        <h3 className="MatInput">Matric Number</h3>
        <input type="text" required className="MatNoInput" />
        <h3 className="MatInput">Password</h3>
        <input type={passwordInputType} required className="passInput" />
        <span className="password-toggle-icon">{ToggleIcon}</span>
        <h3 className="FgtPasswdrTxt">Forgot password?</h3>
        <button className="logINBtn">Log In</button>
      </div>
    </div>
  );
};

export default LogIn;
