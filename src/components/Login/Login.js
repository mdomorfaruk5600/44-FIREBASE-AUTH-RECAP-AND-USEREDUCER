import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    if(firebase.getApps().length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const from = location.state || { from : '/' };

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider).then(result => {
            const {displayName, email} = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            navigate(from.from);
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