import React, { useState } from "react";
import { Input , Button } from "antd";
import "./css/Login.css"

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleClick() {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential)
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