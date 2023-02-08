import React from "react";
import styled from "styled-components";
import Listrender from "./Listrender";

export default function Next7Days(props) {
  const date = new Date();
  const filteredList = props.list.filter((task) => {
    const diffTime = task.date - date;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 7 && diffDays >= 0) {
      return true;
    }
    return false;
  });
  return (
    <MainContainer>
      <div>
        <Listrender list={filteredList} />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  text-align: center;
  margin-top: 1%;
  div {
    color: white;
    background-color: crimson;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    border-radius: 5px;
    display: inline-flex;
    flex-direction: column;
    padding: 4px;
  }
`;
