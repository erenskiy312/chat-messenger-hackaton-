import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier  } from "firebase/auth";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[2].value;


    

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  const googleProvider = new GoogleAuthProvider();


  const signInWithGoogle = async (e) => {
    try {
      e.preventDefault()
      await signInWithPopup(auth, googleProvider)
        navigate('/')
      
    } catch (error) {
      setErr(true)
    }
    
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    }, auth); 
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = e.target[1].value;
    
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      setErr(true)
    });
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Messenger</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
        <GoogleButton
                style={{ marginLeft: '15%', width: "70%", outline: "none"}}
                onClick={signInWithGoogle}
                label='Войти с Google'
              />     
          <input type="email" placeholder="email" />
          <input type="phone" placeholder="phone number +XXXXXXXXX" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
