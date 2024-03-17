import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
