import { Space, Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div>
      <Space style={{width:"100%",height:"100vh",display:"flex", alignItems:"center", justifyContent:"center"}} size="middle">
        <Spin />
      </Space>
    </div>
  );
};

export default Loader;
