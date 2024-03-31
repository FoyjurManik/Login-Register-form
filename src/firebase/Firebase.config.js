// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHxL8XGAnfjqRyxb5APZWIUXdlJ9qYNvM",
  authDomain: "login-firebase-dbc2d.firebaseapp.com",
  projectId: "login-firebase-dbc2d",
  storageBucket: "login-firebase-dbc2d.appspot.com",
  messagingSenderId: "207770722779",
  appId: "1:207770722779:web:13ba9c1d1ebe6aaca147fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;