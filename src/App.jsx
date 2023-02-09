import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Default from "./components/Default/Default";
import ForgotPs from "./components/ForgotPS/ForgotPs";
import Home from "./components/Home/Home";
import NewPass from "./components/NewPass/NewPass";
import Register from "./components/Register/Register";
import Verify_forgot from "./components/Verify-forgotPS/Verify_forgot";
import Verify from "./components/Verify/Verify";
import LoginPage from "./Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/default" element={<Default />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/newPass" element={<NewPass />} />
        <Route path="/forgot-pass" element={<ForgotPs />} />
        <Route path="/forgot-verify" element={<Verify_forgot />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
};

export default App;
