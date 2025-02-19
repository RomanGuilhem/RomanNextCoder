"use client";
import { auth } from "@/Firebase/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Link from "next/link";   

export const AuthContext = createContext();

const { Provider } = AuthContext;


const AuthContextProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
                setCurrentUser(user)
            } else {
                setLoggedIn(false)
                setCurrentUser(null)
            }
        })
    }, [])

    const handleLogin = async (email, password) => {
        await signInWithEmailAndPassword(auth, email || "test1@test.com", password || "123456")
    }

    const handleLogout = async () => {
        await signOut(auth)
    }

    return (
        <Provider value={{ currentUser, loggedIn, handleLogin, handleLogout }}>
            {props.children}
        </Provider>
    );
}

export default AuthContextProvider;