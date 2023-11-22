// Write all the code here
import React, { useState , useEffect} from "react";
import { Link, Navigate } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGoogle } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [profile, setProfile] = useState({
    email: '',
    password: ''
  })
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  

  const handleInput = e => {
    const {name, value} = e.target
    setProfile(prev => (
      { 
        ...prev,
        [name]: value,
      }
    ))
    
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
    setProfile({
      email: '',
      password: ''
    })
    setIsLoginSuccess(!isLoginSuccess)
  }

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  }


  return (
    <>
    <div className="login-page">
      {(!isLoginSuccess)?<div className="login-container">
        <div className="first-row">
          <button className="login btn">login</button>
          <button className="register btn">register</button>
        </div>
        <div className="second-row">
          <h6>Sign in with:</h6>
          <div className="social-media-bar">
            <TiSocialFacebook  role="link" onClick={() => openInNewTab('https://www.facebook.com/')}/>
            <TiSocialTwitter role="link" onClick={() => openInNewTab('https://twitter.com/')}/>
            <SlSocialGoogle role="link" onClick={() => openInNewTab('https://www.google.com/')}/>
            <FaGithub role="link" onClick={() => openInNewTab('https://www.github.com/')}/>
          </div>
          <h6>or:</h6>
        </div>
        <div className="third-row login-form">
          
          <form method="post" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="Email address"
              name='email'
              onChange={handleInput}
              value={profile.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
              value={profile.password}
              required
            />

            <div className="forth-row">
              <div className="rmb">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="forgot-password">
                <a href="">Forgot password?</a>
              </div>
            </div>
            <div className="fifth-row">
              <button className="signIn-btn" type="submit">
                sign in
              </button>
            </div>
          </form>
          
          <div>
            <h6>
              Not a member? <a href="">Register</a>
            </h6>
          </div>
        </div>
      </div>
      : 
        <>
        <h1>Login Successfully! </h1>
        <Link to='/menu'><h4>let's order some nice burgers!</h4></Link>
        </>
      }
    </div>
    </>
  );
};

export default Login;
