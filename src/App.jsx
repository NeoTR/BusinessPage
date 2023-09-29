import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Renter from "./components/Renter/Renter";

function App() {
  return (
    <>
      <NavBar />
      <div className="bg-[#0f0f0f] w-screen h-screen mt-[67px]">
        <Home />
        <Renter />
      </div>
    </>
  );
}

export default App;
