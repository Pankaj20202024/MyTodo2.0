import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function Inbox(props) {
  const [newTask, setNewTask] = useState(false);
  const titleRef = useRef("");
  const calendarRef = useRef("");
  const newTaskHandler = () => {
    setNewTask(true);
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
      window.alert("Please enter a title");
      return;
    }
    let newObj = {
      number: props.list.length + 1,
      title: titleRef.current.value,
      date: new Date(calendarRef.current.value),
    };
    props.append(newObj);
    setNewTask(false);
  };
  const cancelHandler = () => {
    setNewTask(false);
    calendarRef.current.focus();
    calendarRef.current.blur();
    window.location.reload();
  };
  return (
    <MainContainer>
      <h2>INBOX</h2>
      {!newTask && <button onClick={newTaskHandler}>+AddNew</button>}
      {newTask && (
        <form action="">
          <input type="text" name="" id="" ref={titleRef} />
          <div>
            <button onClick={addHandler}>Add Task</button>
            <button onClick={cancelHandler}>Cancel</button>
            <input type="date" ref={calendarRef} defaultValue="2023-01-01" />
          </div>
        </form>
      )}
      <InformationContainer>
        {props.list.map((list) => {
          return (
            <div key={list.number}>
              <div>
                {list.title}({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </InformationContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 8px 16px;
    display: inline-flex;
    margin-top: 2%;
    color: crimson;
  }
  input {
    font-size: 1.3rem;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    display: inline-flex;
    margin-top: 2%;
    color: crimson;
    border: 2px solid crimson;
    border-radius: 5px;
    margin: 8px;
  }
  input :focus {
    outline: none;
    border: 1px solid crimson;
    box-shadow: 0 0 3px crimson;
  }
  button {
    font-size: 1.3rem;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    display: inline-flex;
    margin-top: 2%;
    color: crimson;
    border: 2px solid crimson;
    border-radius: 5px;
    margin: 8px;
  }
  button:hover {
    background-color: crimson;
    color: white;
    transform: scale(1.06);
  }
`;

const InformationContainer = styled.div`
  padding: 4px;
  margin: 4px;
  div {
    font-size: 1.3rem;
    color: white;
    background-color: crimson;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    border-radius: 5px;
    margin: 5px;
    padding: 3px;
  }
`;
