import React, { useEffect } from "react";

import { db } from "../firebase";
import { collection, getDocs, doc, getDoc, addDoc, query, where } from "firebase/firestore";

const Home = () => {

  useEffect(() => {
    const firebaseFunction = async () => {

    const collectionReference = collection(db, "products")
    const q = query(collectionReference, where('price', '<', 500), where('category', '==', 'jewellery'))
    getDocs(q).then(response => {
        response.forEach(price => {
            console.log(price.data().price)
        })
    })
    }

    firebaseFunction()
  })

  return(
    <div>Home</div>
  )
}

export default Home;