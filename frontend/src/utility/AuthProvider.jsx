/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);            
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut =()=>{
        return signOut(auth);
    }
    const authInfo = {
        createUser,
        signInUser,
        user,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;