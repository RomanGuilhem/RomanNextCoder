import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBbV0SzzVgUJSAOUQUSEaojyQcd5yFtxJE",
  authDomain: "nextromancoderproyectofinal.firebaseapp.com",
  projectId: "nextromancoderproyectofinal",
  storageBucket: "nextromancoderproyectofinal.firebasestorage.app",
  messagingSenderId: "1034634294593",
  appId: "1:1034634294593:web:f07b341b23670564bf1dc0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);