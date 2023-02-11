import React from "react";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";
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

const Main = () => {
  const items = [
    getItem(<Link to={""}>Savol qo'shish</Link>, "1", <PlusOutlined />),
    getItem(
      <Link to={"added"}>Qo'shilgan savollar</Link>,
      "2",
      <CheckOutlined />
    ),
    ,
  ];

  return (
    <>
      <h2 style={{marginTop: 0,}}>ASOSIY</h2>
      <div
        style={{
          display: "flex",
        }}
      >
        <Menu
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
export default Main;
