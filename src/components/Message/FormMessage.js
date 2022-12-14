import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import { FiSend } from "react-icons/fi";

const FormMessage = ({ user, newMessage, setNewMessage, dataArray }) => {
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const pushData = {
      text: formValue,
      createdAt: new Date(),
      uid: user.uid,
      photoURL: user.photoURL,
    };

    dataArray.unshift(pushData);

    await addDoc(collection(db, "messages"), pushData);

    setNewMessage(!newMessage);
    setFormValue("");
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        ></input>
        <button type="submit">
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default FormMessage;
