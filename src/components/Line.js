import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";
//dbをfirebaseから受け取る
import { auth, db } from "../firebase";

function Line() {
  //firebaseで作成したmessageの変数を格納する
  const [messages, setMessages] = useState([]);
  //第二引数に[]を入れると初回のマウント時＝レンダリングした時1回のみ
  useEffect(() => {
    //データベースにアクセスしてメッセージを受け取る
    db.collection("messages")
      //最新の作成順に並び替える
      .orderBy("createdAt")
      //最大限に表示したい数
      .limit(50)
      //いろんなデータを取得する
      .onSnapshot((snapshot) => {
        //いろんなデータをsetsetMessagesを使って取得する
        //docsの中にいろんな情報が入っていて、mapで取り出す。
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="messages">
        {/* messagesの中から、map関数で呼び出す */}
        {messages.map(({ id, text, photoURL, userid }) => (
          <div>
            {/* map関数を使う場合、どの関数を取り出すか定める必要があるので　divタグに必ずidを付ける */}
            <div
              key={id}
              //   ログインしているユーザーでクラスを変えることができる
              className={`message ${
                userid === auth.currentUser.userid ? "sent" : "received"
              }`}
            >
              {/* 自分のアイコン */}
              <img src={photoURL} alt="" />
              {/* textを取得 */}
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}
export default Line;