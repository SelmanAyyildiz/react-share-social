import React,{createContext, useState, useEffect} from 'react'

import firebase from '../firebase/firebase.utils';
export const FirebaseAuthContext = createContext();

 function AuthContext(props) {
    const[isAuth, setIsAuth]=useState(false);
    const[currentUser, setCurrentUser]=useState(null);

    useEffect(()=>{
        firebase.firebaseAuth.onAuthStateChanged((user)=> {
            console.log("USERRR", user);
            setCurrentUser(user);
        });
        
    },[]);
    return (
        <FirebaseAuthContext.Provider value={{currentUser}}>
            {props.children}
        </FirebaseAuthContext.Provider>
    )
}

export default AuthContext
