import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <NavBar />
      <div className="bg-[#0f0f0f] w-full h-screen mt-[67px]">
        <Home />
      </div>
    </>
  );
}

export default App;
