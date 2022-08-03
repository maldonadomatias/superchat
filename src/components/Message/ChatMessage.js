import React from "react";
import "./ChatMessage.css";
import logo from '../../assets/logo.jpeg'

const ChatMessage = ({ message, user }) => {

  const messageClass = user.uid === message.uid ? "sent" : "received";
  const photo = message.photoURL ? message.photoURL : logo

  return (
    <div className={`message ${messageClass}`}>
      <img alt="user" src={photo} />
      <p>{message.text}</p>
    </div>
  );
};

export default ChatMessage;
