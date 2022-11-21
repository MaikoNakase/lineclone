import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";
import CallIcon from "@mui/icons-material/Call";

const SignOut = () => {
  return (
    <div className="header">
      <Button
        onClick={() => auth.signOut}
        style={{ color: "white", fontSize: "15px" }}
      >
        SignOut
      </Button>
      {/* 現在ログインしているユーザー名 */}
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
};

export default SignOut;