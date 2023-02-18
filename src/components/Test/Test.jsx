import { Select, Space } from "antd";
import React from "react";

const Test = () => {
  function loc() {
    if (localStorage.getItem("token")) {
      return null;
    } else {
      window.location = "/login";
    }
  }
  loc();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <div>
        <Space wrap>
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
              {
                value: "disabled",
                label: "Disabled",
                disabled: true,
              },
            ]}
          />
        </Space>
      </div>
    </div>
  );
};

export default Test;
