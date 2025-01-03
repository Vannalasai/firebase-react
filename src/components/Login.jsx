import React, { useState } from "react";
import { Input , Button } from "antd";
import "./css/Login.css"
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleClick() {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // navigate('/')
    }).catch(err => {
      console.log(err)
    })
  }

    return (
      <div className="login-page">
        <Input onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Email Address" type="email"/>
        <Input onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Enter Password" type="password"/>
        <Button onClick={handleClick} type="primary">Login now!</Button>
      </div>
    )
}

export default Login;