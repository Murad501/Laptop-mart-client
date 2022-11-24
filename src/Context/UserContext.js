import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app)
export const authContext = createContext()

const UserContext = ({children}) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])



    const authInfo = {
        user,
        loading,
        auth,
        createUser,
        loginUser,
        googleLogin,
        Logout
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;