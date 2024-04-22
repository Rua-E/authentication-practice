// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX3oqCSvuWBs0dWzm9yIZ0w4qGxqXQ4_Q",
  authDomain: "authentication-practice-fefdf.firebaseapp.com",
  projectId: "authentication-practice-fefdf",
  storageBucket: "authentication-practice-fefdf.appspot.com",
  messagingSenderId: "911041359719",
  appId: "1:911041359719:web:aeecaeb59c97da65d5c9c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();