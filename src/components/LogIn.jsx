import React, { useEffect } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate} from "react-router-dom";


export const LogIn = () => {

  const navigate = useNavigate();
  const auth = getAuth();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      navigate('/Admin')
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
    
  return (
    <button onClick={signInWithGoogle}> Sign In With Google </button>
  );

}
