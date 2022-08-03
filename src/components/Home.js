import { useEffect, useState, useRef } from "react";

import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

import ChatMessage from "./Message/ChatMessage";

import classes from "./Home.module.css";
import FormMessage from "./Message/FormMessage";

export function Home() {
  const { logout, user } = useAuth();

  console.log(user.photoURL);

  // console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  // Fetch data of each user through firestore
  const [dataArray, setDataArray] = useState(null);

  const [newMessage, setNewMessage] = useState(false);

  const dummy = useRef();

  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    dummy.current.scrollIntoView({ behavior: "smooth" });
    fetchData();
  }, [newMessage]);

  async function getData() {
    const ordersRef = collection(db, "messages");
    const q = query(ordersRef, orderBy("createdAt", "desc"), limit(25));
    const querySnapshot = await getDocs(q);

    const data = [];
    querySnapshot.forEach((doc) => {
      const oneData = doc.data();
      data.push(oneData);
    });
    setDataArray(data);
  }

  console.log(dataArray);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.navbar}>
        <div>
          <h1>
            Welcome:
            <span className={classes.username}>
              {user.displayName || user.email}!
            </span>
          </h1>
        </div>
        <button onClick={handleLogout}>logout</button>
      </div>
      <div className={classes.container}>
        <div className={classes.chat}>
          {dataArray &&
            dataArray.map((msg, key) => (
              <ChatMessage key={key} message={msg} user={user} />
            ))}
        </div>
        <div ref={dummy}></div>
      </div>
      <div className={classes.container}>
        <FormMessage
          dataArray={dataArray}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          user={user}
        />
      </div>
    </div>
  );
}
