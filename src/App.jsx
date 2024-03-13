import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Work />
      </div>
    </>
  );
};

export default App;
