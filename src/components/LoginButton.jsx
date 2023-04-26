import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginButton = ({ adminList }) => {
  const { googleLogin, user, logOut } = UserAuth();
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
    const checkIfUserExists = async () => {
      if (
        user !== null &&
        adminList.length !== 0 &&
        adminList.includes(user.email)
      ) {
        setValidUser(true);
        navigate("/admin");
      } else if (user !== null && user.hasOwnProperty("email") && adminList.length !== 0) {
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
