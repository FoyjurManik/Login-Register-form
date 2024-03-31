import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";

import app from "../firebase/Firebase.config";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser) ;
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error)
        });
    };

    const handleSignOut =() =>{
        signOut(auth)
        .then(result => {
         console.log(result);
         setUser(null);
        })
        .catch(error => {
            console.log(error)
        });
    };
    return (
        <div className="">
            { user ? 
            <button className="font-bold btn bg-red-500" onClick={handleSignOut}>Sign Out</button> :
            <button className="font-bold btn bg-green-500 " onClick={handleGoogleSignIn}>Google Sign In</button>
            
            
          }
            
                {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL}alt=" "/>
                </div>
               }
            
        </div>
    );
};

export default Login;