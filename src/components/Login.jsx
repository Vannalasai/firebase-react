import React, { useState } from "react";
import { Input , Button } from "antd";
import "./css/Login.css"

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
    return (
      <div className="login-page">
        <Input placeholder="Email Address" type="email"/>
        <Input placeholder="Enter Password" type="password"/>
        <Button type="primary">Login now!</Button>
      </div>
    )
}

export default Login;