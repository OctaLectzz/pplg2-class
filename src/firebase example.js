// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSexample5Y0y-KCYBNQMdexaleWVw",
  authDomain: "example.firebaseapp.com",
  projectId: "example",
  storageBucket: "example.appspot.com",
  messagingSenderId: "194example320",
  appId: "1:194example320:web:dd74b033315892b1bd0a9d",
  measurementId: "G-NLXLEXAMPLEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();