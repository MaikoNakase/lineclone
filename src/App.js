import "./App.css";
import SignIn from "./components/SignIn";
import Line from "./components/Line";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

function App() {
  //user情報を変数に入れる
  const [user] = useAuthState(auth);
  //userがいるかどうか ⇨ いる場合はサインインする
  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;