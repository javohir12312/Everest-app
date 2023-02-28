import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Circle = () => {
  return (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
};
const App = () => <Spin indicator={Circle} />;
export default Circle;
