import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Default from "./components/Default/Default";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
