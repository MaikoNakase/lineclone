import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const SignIn = () => {
  //Googleでログインする
  function signInWithGoogle() {
    //providerの変数を用意する
    //firebase.auth.GoogleAuthProviderは、Google認証のproviderが使える
    const provider = new firebase.auth.GoogleAuthProvider();
    //firebase.jsの中にauth認証の中にsignInWithPopupが入っていて、用意したproviderを入れる
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleでログインする</Button>
    </div>
  );
};

export default SignIn;