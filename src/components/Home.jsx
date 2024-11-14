import React, { useEffect } from "react";

import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const Home = () => {

  useEffect(() => {
    const getAllUsers = async () => {
      const collectionReference = doc(db, "users", "sai")
      const userDocuments = await getDoc(collectionReference)
      console.log(userDocuments.data())
    }

    getAllUsers()
  })

  return(
    <div>Home</div>
  )
}

export default Home;