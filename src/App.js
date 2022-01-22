import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Grid from "./components/Grid";
import Carrusel from "./components/Carrusel";

function App() {
  return (
    <div>
      <Navbar /> 
      <Carrusel /> 
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Grid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
