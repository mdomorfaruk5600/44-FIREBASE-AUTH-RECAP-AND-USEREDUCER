import React from 'react';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
const Login = () => {
    firebase.initializeApp(firebaseConfig);
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider).then(result => {
            const token = result.accessToken;
            const user = result.user;
            console.log(user);
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