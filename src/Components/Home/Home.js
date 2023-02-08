import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  return (
    <MainContainer>
      <div>
      
        <Link to="/login">Login</Link> <br />
      </div>
      <div>
      
        <Link to="/signup">Signup</Link>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {

    color: rgb(24, 119, 242);
    border-radius: 8px;
    font-weight: bold;
    font-size: 2rem;
    padding: 10px 15px;
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 3%;
  }
`;
