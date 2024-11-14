import React, { useEffect } from "react";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {

  useEffect(() => {
    const getAllUsers = async () => {
      const collectionReference = collection(db, "users")
      const userDocuments = await getDocs(collectionReference)
      userDocuments.forEach((user) => {
        console.log(user.data())
      })
    }

    getAllUsers()
  })

  return(
    <div>Home</div>
  )
}

export default Home;