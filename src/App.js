import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
