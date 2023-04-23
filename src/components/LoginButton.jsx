import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";

export const LoginButton = () => {
  const { googleLogin, user, logOut } = UserAuth();
  const [adminList, setAdminList] = useState([]);
  const [validUser, setValidUser] = useState(true);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => ({ ...doc.data() }));
      const emails = data.map((data) => data.email);
      setAdminList(emails);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const checkIfUserExists = async () => {
      if (
        user !== null &&
        adminList.length !== 0 &&
        adminList.includes(user.email)
      ) {
        setValidUser(true);
        navigate("/admin");
      } else if (user !== null && user.hasOwnProperty("email")) {
        setValidUser(false);
        await logOut();
      }
    };
    checkIfUserExists();
  }, [user]);

  if (validUser) {
    return (
      <>
        <GoogleButton
          data-te-ripple-init
          type="light"
          onClick={() => {
            handleGoogleLogin();
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <GoogleButton
          data-te-ripple-init
          type="light"
          onClick={() => {
            handleGoogleLogin();
          }}
        />
        <span class="font-title text-red-600">
          Invalid user. Please try again.
        </span>
      </>
    );
  }
};
