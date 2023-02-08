import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Header from "./Header";
import MainSection from "./MainSection";
import Sidenav from "./SideNav";
import styled from "styled-components";
function App(props) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [active, setActive] = useState("INBOX");
  return (
    <MainContainer>
      {props.name ? (
        <div>
          <Header name={props.name} />
          <div className="row">
            <div className="col-md-2">
              <Sidenav change={setActive} />
            </div>
            <div className="col-md-10">
              <MainSection active={active} />
            </div>
            <button className="SignoutButton" onClick={handleSignOut}>
              SignOut
            </button>
          </div>
        </div>
      ) : (
        "Login Please"
      )}
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  .SignoutButton {
    width: 10%;
    font-size: 1.3rem;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    background-color: crimson;
    color: white;
    border-radius: 5px;
    margin: 8px;
    position: relative;
    left: 50%;
    border: none;
  }
`;
