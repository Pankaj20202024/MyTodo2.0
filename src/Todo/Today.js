import React from "react";
import Listrender from "./Listrender";
import styled from "styled-components";
export default function Today(props) {
  const date = new Date();
  const filteredList = props.list.filter((task) => {
    if (date.getFullYear() !== task.date.getFullYear()) {
      return false;
    }
    if (date.getMonth() !== task.date.getMonth()) {
      return false;
    }
    if (date.getDate() !== task.date.getDate()) {
      return false;
    }
    return true;
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
