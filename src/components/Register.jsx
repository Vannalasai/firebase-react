import React from "react";
import { Input , Button } from "antd";
import "./css/Login.css"

const Register = () => {
    return (
      <div className="login-page">
        <Input placeholder="Email Address" type="email"/>
        <Input placeholder="Enter Password" type="password"/>
        <Button type="primary">Register now!</Button>
      </div>
    )
}

export default Register;