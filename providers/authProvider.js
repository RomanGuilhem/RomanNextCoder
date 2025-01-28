"use client";

import { auth } from "@/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();


const { Provider } = AuthContext;



const AuthContextProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        })

    }, [])

    const handleLogin = async () => {
        const resultado = await signInWithEmailAndPassword(auth, "test1@test.com", "123456")
        console.log("🚀 ~ handleLogin ~ resultado:", resultado)
    }

    const handleLogout = async () => {
        await signOut(auth)
    }


    return (
        <Provider value={{ loggedIn, handleLogin, handleLogout }}>
            {/* <CarritoProvider> */}
                {props.children}
            {/* </CarritoProvider> */}
        </Provider>
    );
}

export default AuthContextProvider;