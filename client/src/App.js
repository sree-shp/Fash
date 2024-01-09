import React, { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import {useCookies } from "react-cookie";
import axios from "axios";
import RoutesList from "./Routes";

function App() {
  const[removeCookies] = useCookies();
  const[userName, setUserName] = useState("");
  const [selectedId, setSelectedId] = useState();

//get userName from the server to show it when logged in

  useEffect(() => {
    async function getUserName(){
      try{
        const res= await axios.get(
          "https://fash-server.onrender.com/api/users/getUserName",
          {
            withCredentials: true
          });
        
        setUserName(res.data.userName);
      }catch(err){
        console.error(err.message);
      }
    }
    getUserName()
  }, [])

  return (
    <div className="App">
      {/* Navbar  */}
      <Navbar
        userName
        setUserName
        removeCookies
        selectedId
      />
      <RoutesList userName setUserName selectedId setSelectedId/>
      
    </div>
  );
}

export default App;
