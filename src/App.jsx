import React, { useState, useEffect } from "react";
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
import Render from "./components/AdminPanel/Render/Render";
import Users from "./components/AdminPanel/Users/Users";
import Default from "./components/Default/Default";
import Teacher from "./components/Teacher/Teacher";
import axios from "./server/api/index";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const onFunction = async () => {
      try {
        const resp = await axios.get("/categories");
        setCategories(resp.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    onFunction();
  }, [categories]);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Default />} />
        <Route path="test" element={<Test />} />
        <Route path="teacher" element={<Teacher />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/newPass" element={<NewPass />} />
      <Route path="/forgot-pass" element={<ForgotPs />} />
      <Route path="/forgot-verify" element={<VerifyForgot />} />
      <Route path="/forgot-email" element={<UpdateEmail />} />
      <Route path="/newEmail" element={<NewEmail />} />
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Main />} />
        {categories.map((el) => {
          return (
            <Route
              path={el.title}
              key={el.id}
              element={<Render elTitle={el.title} />}
            />
          );
        })}
        <Route path="users" element={<Users />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
};

export default App;
