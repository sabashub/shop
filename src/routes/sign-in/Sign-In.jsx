import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up-form/SignUp";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/Firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>sign in with Google Popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
