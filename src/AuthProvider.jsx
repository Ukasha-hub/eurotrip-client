import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {createContext, useEffect, useState} from 'react';
import app from './firebase.config';


export const AuthContext= createContext('null')


const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true)
    

    const createUser= (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signIn= (email, password)=>{
        setLoading(true)
        
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut=()=>{
        setLoading(true)
        
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('user auth changed', currentUser)
            setUser(currentUser)
            setLoading(false)
            
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo={user, loading, setLoading, createUser, logOut, signIn}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;