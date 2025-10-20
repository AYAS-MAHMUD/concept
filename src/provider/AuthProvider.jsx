import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] =useState(true)
    console.log(loading,user)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signOutUser=()=>{
        return signOut(auth)
        
    }
     const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updatedUser=(updatedData)=>{
        return updateProfile(auth,currentuser,updatedData)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe()
        }

    },[])

    const authdata = {
        user,setUser,createUser,signOutUser,signInUser,loading,setLoading,updatedUser,
    }

    return <AuthContext value={authdata}>
        {children}
    </AuthContext>
};

export default AuthProvider;