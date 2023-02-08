import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import {auth} from './firebase'
import Todo from "./Todo/Todo";


export default function App() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.email.substr(0, user.email.indexOf("@")));
      } else setUsername("");
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todo name={username} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// import { useState } from "react";
// import "./App.css";

// import SideNav from './Todo/SideNav'
// import MainSection from './Todo/MainSection'
// import Header from "./Todo/Header";
// function App() {
//   const [active,setActive]=useState("INBOX")
//   return (
//     <div>
//       <Header />
//       <div className="row">
//         <div className="col-md-2">
//           <SideNav change={setActive}/>
//         </div>
//         <div className="col-md-10">
//           <MainSection active={active}/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
