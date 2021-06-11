import React from "react";
import { HeaderDıv } from "../../styles/Header";
function Header(props) {
  return (
    <>
      <HeaderDıv>
        <input
          onChange={(e) => props.action(e)}
          placeholder="Your Name"
          value={props.name}
          name="name"
          type="text"
        />
      </HeaderDıv>
    </>
  );
}

export default Header;
