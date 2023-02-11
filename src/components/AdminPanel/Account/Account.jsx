import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to={""}>Shaxsiy ma'lumotlar</Link>, "1", <UserOutlined />),
  getItem(
    <Link to={"change"}>Parolni o'zgartirish</Link>,
    "2",
    <LockOutlined />
  ),
  ,
];

const Account = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <>
    <h2 style={{marginTop: 0,}}>MENING HISOBIM</h2>
    <div
      style={{
        display: "flex",
      }}
    >
      <Menu
        onClick={onClick}
        style={{
          width: 250,
          borderRadius: "10px",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <div
        style={{
          width: 1100,
          marginLeft: "40px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Outlet></Outlet>
      </div>
    </div>
    </>
  );
};
export default Account;
