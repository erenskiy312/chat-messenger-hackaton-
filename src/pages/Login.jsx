import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

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
    
    
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Messenger</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
        <GoogleButton
                style={{ marginLeft: '12%', width: "70%", outline: "none"}}
                onClick={signInWithGoogle}
                label='Войти с Google'
              />     
          <input type="email" placeholder="email" />
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
