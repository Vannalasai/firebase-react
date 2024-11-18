import React, { useEffect } from "react"
import { Routes , Route, useNavigate } from 'react-router-dom'
import Login from "./components/Login"
import Home from "./components/Home"
import Register from "./components/Register"

import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user){
        navigate('/')
        console.log("user is login")
      }else{
        navigate('/login')
        console.log('user is not there')
      }
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
    </>
  )
}

export default App
