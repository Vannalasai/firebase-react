import React, { useCallback, useEffect, useMemo } from "react";

import { auth, db } from "../firebase";
import { collection, getDocs, doc, getDoc, addDoc, query, where, limit } from "firebase/firestore";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Home = () => {

    const navigate = useNavigate()

    function handleLogout() {
        signOut(auth).then(response => {
            // navigate('/login')
            console.log(auth.currentUser)
        })
    }

  useMemo(() => {
    const firebaseFunction = async () => {

    const collectionReference = collection(db, "products")
    const q = query(collectionReference, where('price', '<', 500), limit(2))
    getDocs(q).then(response => {
        response.forEach(price => {
            console.log(price.data().price)
        })
    })
    }

    // firebaseFunction()
  })

  return(
    <Button type="primary" onClick={handleLogout}>Logout</Button>
  )
}

export default Home;