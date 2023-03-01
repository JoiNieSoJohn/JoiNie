import React from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/navComponent";
import HeroComponent from "./components/heroComponent";
import CatagoryComponent from "./components/catagoryComponent";
import MainComponent from "./components/mainComponent";
import FooterComponent from "./components/footerComponent";
import "./styles/style.css";

import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <CatagoryComponent />
      <MainComponent />
      <FooterComponent />
      <Routes></Routes>
    </div>
  );
}

export default App;
