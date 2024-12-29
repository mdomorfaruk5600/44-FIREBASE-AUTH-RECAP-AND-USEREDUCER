import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    if(firebase.getApps().length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider).then(result => {
            const {displayName, email} = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
        }).catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;