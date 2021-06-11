import React from "react";
import { Content, Message } from "../../styles/MessageBox";

function MessageBox(props) {
  return (
    <>
      <Message>
        {props.chat.map(({ name, message }, index) => (
          <Content key={index}>
            <span className="name">{name}:</span> <span>{message}</span>
          </Content>
        ))}
      </Message>
    </>
  );
}

export default MessageBox;
