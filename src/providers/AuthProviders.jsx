import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext = createContext(null);
const auth =getAuth(app);
const googleAuthProvider =new GoogleAuthProvider();
const githubAuthProvider =new GithubAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser =(email, password)=>{
        console.log('createUser')
        return createUserWithEmailAndPassword(auth,email,password);
        form.reset();
    }

    const singIn=(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const singinWithGoogle=()=>{
        return signInWithPopup(auth, googleAuthProvider);
    }
    const singinWithGithub=()=>{
        return signInWithPopup(auth, githubAuthProvider);
    }


    const logOut=()=>{
        return signOut(auth);

    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change', currentUser);
            setUser(currentUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])


    const authInfo ={
        user,
        createUser,
        singIn,
        singinWithGoogle,
        singinWithGithub,
        logOut
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;