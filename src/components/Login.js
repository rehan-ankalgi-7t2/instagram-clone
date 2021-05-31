import { Button } from '@material-ui/core'
import React from 'react';
import '../css/login.css';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
                <div className="login__container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/100px-Instagram_logo_2016.svg.png" alt="Instagram Logo"/>
                    <div className="login__text">
                        <h1>Sign in to Instagram</h1>
                        <Button variant="contained" onClick={signIn} type="submit" color="primary">sign in with Google</Button>
                    </div>
                </div>
        </div>
    );
}

export default Login
