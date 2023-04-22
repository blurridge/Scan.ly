import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
  const { googleLogin, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(user !== null) {
      navigate('/admin');
    }
  }, [user])

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
};
