import React from "react";
import styled from "styled-components";

export default function SideNav(props) {
  return (
    <MainContainer>
      <ul>
        <li
          onClick={() => {
            props.change("INBOX");
          }}
        >
          <div>Inbox</div>
        </li>
        <li
          onClick={() => {
            props.change("TODAY");
          }}
        >
          <div>Today</div>
        </li>
        <li
          onClick={() => {
            props.change("NEXT");
          }}
        >
          <div>Next 7 Days</div>
        </li>
      </ul>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  text-decoration: none;
  ul{
    background-color: crimson;
    border-radius:8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    margin-left: 20px;
    li {
    font-size: 1.3rem;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    color: white;
  }
  }

`;
