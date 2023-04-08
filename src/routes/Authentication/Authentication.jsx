import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up-form/SignUp";
import SignIn from "../../components/sign-in-form/SignIn";
import { AuthenticationContainer } from "./Authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
