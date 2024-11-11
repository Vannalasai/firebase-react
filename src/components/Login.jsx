import React from "react";
import { Input , Button } from "antd";

const Login = () => {
    return (
      <div>
        <Input placeholder="Email Address" type="email"/>
        <Input placeholder="Enter Password" type="password"/>
        <Button type="primary">Login now!</Button>
      </div>
    )
}

export default Login;