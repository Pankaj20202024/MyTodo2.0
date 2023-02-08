import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeadingContainer>
      <p>Add Task To My List</p>
    </HeadingContainer>
  );
}

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    display: inline-flex;
    margin-top: 2%;
    color: crimson;
  }
`;
