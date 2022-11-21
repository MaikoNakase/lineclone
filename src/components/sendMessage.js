import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SendMessage = () => {
  //form内に入力したメッセージを別の変数として格納する
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    //文字を入力して、エンターキーを再ロードされない
    e.preventDefault();
    //authから現在ログインユーザーcurrentuserから取ってくる
    const { photoURL, userid } = auth.currentUser;
    //dbのコレクションの中の　messages をaddする
    db.collection("messages").add({
      text: message,
      photoURL,
      userid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //enterキーを押した後、"メッセージを入力"が表示されない
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMessage">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;