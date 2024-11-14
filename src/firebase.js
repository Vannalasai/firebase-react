import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClTltjYTstSbq0wJicvg-3qJYhpY4gdMY",
  authDomain: "react-firebase-75fed.firebaseapp.com",
  projectId: "react-firebase-75fed",
  storageBucket: "react-firebase-75fed.firebasestorage.app",
  messagingSenderId: "154330236904",
  appId: "1:154330236904:web:09d8b08e6e34537bbe065d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)