// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbV0SzzVgUJSAOUQUSEaojyQcd5yFtxJE",
  authDomain: "nextromancoderproyectofinal.firebaseapp.com",
  projectId: "nextromancoderproyectofinal",
  storageBucket: "nextromancoderproyectofinal.firebasestorage.app",
  messagingSenderId: "1034634294593",
  appId: "1:1034634294593:web:f07b341b23670564bf1dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =