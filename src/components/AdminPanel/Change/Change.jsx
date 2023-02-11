import React from "react";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

const Change = () => {
  const [password, setPassword] = React.useState();
  const [passwordTwo, setPasswordTwo] = React.useState();
  const [passwordThere, setPasswordThere] = React.useState();
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <h2 style={{ marginTop: 0 }}>Parolni o'zgartirish</h2>
      <Input.Password
        minLength={6}
        size="large"
        style={{ marginBottom: "15px" }}
        placeholder="parolni kiriting"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <Input.Password
        minLength={6}
        size="large"
        style={{ marginBottom: "15px" }}
        placeholder="yangi parolni kiriting"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={passwordTwo}
        onChange={(evt) => setPasswordTwo(evt.target.value)}
      />
      <Input.Password
        minLength={6}
        size="large"
        style={{ marginBottom: "15px" }}
        placeholder="yangi parolni tasdiqlang"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={passwordThere}
        onChange={(evt) => setPasswordThere(evt.target.value)}
      />

      <Space direction="horizontal">
        <Button
          size="large"
          onClick={() => (setPassword(), setPasswordTwo(), setPasswordThere())}
        >
          Bekor qilish
        </Button>
        <Button
          size="large"
          type={"primary"}
          onClick={() => (setPassword(), setPasswordTwo(), setPasswordThere())}
        >
          Tasdiqlash
        </Button>
      </Space>
    </Space>
  );
};
export default Change;
