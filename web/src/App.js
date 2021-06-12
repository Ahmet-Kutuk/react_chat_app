import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Header from "./Compoments/Header";
import MessageBox from "./Compoments/MessageBox";
import Send from "./Compoments/Send";

const socket = io.connect("http://localhost:4000");
function App() {
  const [user, setUser] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  }, [chat]);

  const onTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = user;
    socket.emit("message", { name, message });
    setUser({ message: "", name });
  };

  return (
    <div className="App">
      <Header name={user.name} action={onTextChange} />
      <MessageBox chat={chat}></MessageBox>
      <Send
        action={onMessageSubmit}
        message={user.message}
        text={onTextChange}
      />
    </div>
  );
}

export default App;
