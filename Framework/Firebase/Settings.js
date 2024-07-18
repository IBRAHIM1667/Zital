// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJauHuk9jEqFcgJjkT0154yaDvLpHvnQw",
  authDomain: "zital-7f5b0.firebaseapp.com",
  projectId: "zital-7f5b0",
  storageBucket: "zital-7f5b0.appspot.com",
  messagingSenderId: "907569137784",
  appId: "1:907569137784:web:74505070719b7ce35c858d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)