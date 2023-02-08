// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA3Ba3gaIXUgiyketz6I8Iwth5vqXZIZIg",
  authDomain: "lpu2-b6047.firebaseapp.com",
  projectId: "lpu2-b6047",
  storageBucket: "lpu2-b6047.appspot.com",
  messagingSenderId: "164308601831",
  appId: "1:164308601831:web:e87c09b0812b44caad0b42",
  measurementId: "G-CY8ERFGER7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth}