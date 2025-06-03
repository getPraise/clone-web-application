import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/Pages/Home";
import Login from "../component/pages/Login";
import SignUp from "../component/signUp/SignUp"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
