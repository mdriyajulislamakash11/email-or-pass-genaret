import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/frebae-init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider ();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            setUser(result.user)
        })
        .catch((error) => {
            console.log(error, 'ERROR KHAISO TMI SONA')
            setUser(null)
        })
    }

    const hadleSigOut = () => {
        signOut(auth)
        .then(() => {
            console.log('Sig Out')
            setUser(null)
        })
        .catch(error => console.log('ERROR', error))
    }

    return (
        <div>
            {/* <button onClick={handleGoogleSingIn}>Log in with google</button>
            <button onClick={hadleSigOut}>Google Sign out</button> */}

            {
                user ? 
                <button onClick={hadleSigOut}>Sign out</button>
                :
                <button onClick={handleGoogleSingIn}>Log in</button> 
            }
            
            {user && <div>
                <h4> {user.displayName} </h4> 
                <p> {user.email} </p> 
                <img src={user.photoURL} alt="" />
            </div> }
        </div>
    );
};

export default Login;