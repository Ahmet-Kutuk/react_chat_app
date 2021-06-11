import styled from "styled-components";

export const SendDıv = styled.form`
  background: rgba(0, 0, 0, 0.5);
  width: 600px;
  padding: 10px;
  height: 50px;
  border-radius: 0px 0px 15px 15px;

  @media (max-width: 500px) {
    width: 350px;
  }

  input {
    width: 85%;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    z-index: 5;

    @media (max-width: 500px) {
      width: 75%;
    }
  }

  button {
    background: #248a52;
    color: white;
    padding: 6px 20px;
    border-radius: 10px;
    z-index: 10;
  }
`;
