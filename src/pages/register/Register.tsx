// import React, { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
// import InstagramIcon from "@mui/icons-material/Instagram";

const Register = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);

  //-------------check if already signed up...-------------//
  const switchMode = () => {
    setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
  };
  //----------------------------------------------------------//

  const AuthTop = () => {
    return (
      <div className="authTop">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="authTop-logo">
            <h1>Social App</h1>
          </div>
        </Link>
        <div className="authTop-option">
          {isSignedUp ? "Already have an account " : "Don't have an account? "}
          <span
            className="registerLeft-bottom-option-span"
            onClick={switchMode}
          >
            {isSignedUp ? "Sign In" : "Create Account"}
          </span>
        </div>
      </div>
    );
  };

  const SocialLogin = () => {
    return (
      <div className="social-login">
        <div className="social-login-wrapper">
          <h1>Account Created</h1>
          <p>Connect to Instagram or Facebook to start using Social</p>
          <div className="social-login-options">
            <div className="social-login-option">
              {/* <InstagramIcon /> */}
              <span>Connect instagram profile</span>
            </div>
            <div className="social-login-option">
              <span>Connect Facebook Page</span></div>
          </div>
          <span>skip</span>
          <hr />
        </div>
      </div>
    );
  };

  return (
    <>
      <AuthTop />
      <SocialLogin />
      {/* <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
            <div className="registerLeft-text">
              {isSignedUp ? <h1>Create an Account</h1> : <h1>Sign in </h1>}
              <p>Free forever. No credit card required</p>
            </div>
            {isSignedUp && (
              <div className="registerLeft-box-details">
                <label htmlFor="fullName">Your Name</label>
                <input
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
              </div>
            )}
            <div className="registerLeft-box-details">
              <label htmlFor="fullName">Username</label>
              <input placeholder="Enter your username" type="text" required />
            </div>
            {isSignedUp && (
              <div className="registerLeft-box-details">
                <label htmlFor="fullName">Email</label>
                <input placeholder="Enter your email" type="email" required />
              </div>
            )}
            <div className="registerLeft-box-details">
              <label htmlFor="fullName">Password</label>
              <input
                placeholder="8 characters or more"
                type="password"
                required
              />
            </div>
            {isSignedUp && (
              <div className="registerLeft-box-details">
                <label htmlFor="fullName">Time Zone</label>
                <input placeholder="Choose City" />
              </div>
            )}
            <button className="registerLeft-button">
              {isSignedUp ? "Create Account" : "Sign In"}
            </button>
            <div className="registerLeft-bottom-option">
              {isSignedUp
                ? "Already have an account "
                : "Don't have an account? "}
              <span
                className="registerLeft-bottom-option-span"
                onClick={switchMode}
              >
                {isSignedUp ? "Sign In" : "Create Account"}
              </span>
            </div>
            {isSignedUp ? (
              <p className="registerLeft-bottom-option-terms">
                By creating an account, you’re opting-in to receive marketing
                and product updates by email. You can always unsubscribe, any
                time. By creating an account you agree to our Terms and Privacy
                Policy
              </p>
            ) : (
              <p className="registerLeft-bottom-option-terms">
                By signing in, you’re opting-in to receive marketing and product
                updates by email.
              </p>
            )}
          </div>
          <div className="registerRight"></div>
        </div>
      </div> */}
    </>
  );
};

export default Register;
