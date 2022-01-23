import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Grid from "./components/Grid";
import CreateProduct from "./components/admin/CreateProduct";
import SingleProduct from "./components/SingleProduct";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.logger.user);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route
          path="/product"
          element={
            user?.admin === false || !user ? (
              <Navigate to="/" />
            ) : (
              <CreateProduct />
            )
          }
        />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
