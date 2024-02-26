import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjDKDET_58J9q2U39EFkCpbtppM3P5TCo",
  authDomain: "react-coder-731e2.firebaseapp.com",
  projectId: "react-coder-731e2",
  storageBucket: "react-coder-731e2.appspot.com",
  messagingSenderId: "340694894394",
  appId: "1:340694894394:web:c9111b1e92255345257203"
};

// Initialize Firebase
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
