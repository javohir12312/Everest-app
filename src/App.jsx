import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/AdminPanel/Admin/Admin";
import Test from "./components/Test/Test";
import ForgotPs from "./components/ForgotPS/ForgotPs";
import Home from "./components/Home/Home";
import NewPass from "./components/NewPass/NewPass";
import Register from "./components/Register/Register";
import VerifyForgot from "./components/VerifyForgotPS/VerifyForgot";
import Verify from "./components/Verify/Verify";
import LoginPage from "./components/Login/Login";
import UpdateEmail from "./components/UpdateEmail/UpdateEmail";
import NewEmail from "./components/NewEmail/NewEmail";
import Account from "./components/AdminPanel/Account/Account";
import Main from "./components/AdminPanel/Main/Main";
import Add from "./components/AdminPanel/Add/Add";
import Added from "./components/AdminPanel/Added/Added";
import Render from "./components/AdminPanel/Render/Render";
import Users from "./components/AdminPanel/Users/Users";

const App = () => {
  const storage = window.localStorage;
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="test" element={<Test />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/newPass" element={<NewPass />} />
      <Route path="/forgot-pass" element={<ForgotPs />} />
      <Route path="/forgot-verify" element={<VerifyForgot />} />
      <Route path="/forgot-email" element={<UpdateEmail />} />
      <Route path="/newEmail" element={<NewEmail />} />
      <Route path="/admin" element={<Admin />}>
        <Route path={JSON.parse(storage.getItem("fan"))} element={<Render />}>
          <Route index element={<Add />} />
          <Route path="added" element={<Added />} />
        </Route>
        <Route path="/admin" element={<Main />}>
          <Route index element={<Add />} />
          <Route path="added" element={<Added />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
};

export default App;
