import React from "react";
import { provider } from "../firebase/config";
import { signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/google_logo.png";

// TODO: Implement sign out, store user details and show on Greeting component.

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
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      navigate("/admin");
      // ...
    } else {
      // User is signed out
      // ...
      navigate("/");
    }
  });

  return (
    <>
      <button
        class="flex gap-4 bg-black py-3 px-6 rounded-lg"
        onClick={signInWithGoogle}
        data-te-ripple-init
      >
        <img src={googleLogo} class="w-5" />
        <span class="font-title font-medium text-sm text-white">Sign in with Google</span>
      </button>
    </>
  );
};
