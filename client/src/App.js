import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import RoutesList from "./Routes";

function App() {
  const [userName, setUserName] = useState("");
  const [selectedId, setSelectedId] = useState();

  return (
    <div className="App">
      {/* Navbar  */}
      <Navbar
        userName={userName}
        setUserName={setUserName}
        selectedId={selectedId}
      />

      <RoutesList
        userName={userName}
        setUserName={setUserName}
        selectedId={selectedId}
        setSelectedId={selectedId}
      />
    </div>
  );
}

export default App;
