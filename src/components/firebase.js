//v9の場合、compat/appの中にfirebaseが入っている
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
});

//firestoreからテキスト情報をとってくる
const db = firebaseApp.firestore();
//firebaseのauthから認証情報をとってくる
const auth = firebase.auth();
//db, authの変数をどこでも使えるようにする
export { db, auth };