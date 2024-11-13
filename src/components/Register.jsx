import React, { useState } from "react";
import { Input , Button } from "antd";
import "./css/Login.css"

import { auth } from '/src/firebase.js';

import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  async function handleClick() {
    createUserWithEmailAndPassword( auth, email, password).then((userCredential) => {
      console.log(userCredential)
    })
  }

    return (
      <div className="login-page">
        <div className="fullname">
          <Input onChange={(e) => setFirstName(e.currentTarget.value)} placeholder="First Name" type="text"/>
          <Input onChange={(e) => setLastName(e.currentTarget.value)} placeholder="Last Name" type="text"/>
        </div>
        <Input onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Email Address" type="email"/>
        <Input onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Enter Password" type="password"/>
        <Button onClick={handleClick} type="primary">Register now!</Button>
      </div>
    )
}

export default Register;