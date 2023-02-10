import { Space, Alert } from "antd";
import React from "react";

const Alert1 = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%",margin:"0 auto", position: "absolute",top:20,display:"flex", alignItems:"center"}}
    >
      <Alert
        style={{textAlign:"center" }}
        message="Bunday email mavjud emas"
        type="error"
        showIcon
      />
    </Space>
  );
};

export default Alert1;
