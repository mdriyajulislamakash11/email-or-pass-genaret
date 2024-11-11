// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS2NTp0_dkZizjBOGYsheGfLopGZheg6g",
  authDomain: "simple-firebase-c98f3.firebaseapp.com",
  projectId: "simple-firebase-c98f3",
  storageBucket: "simple-firebase-c98f3.firebasestorage.app",
  messagingSenderId: "102464829997",
  appId: "1:102464829997:web:55908dbb87ee2e5d03d6a4",
  measurementId: "G-G1XT88G5VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;