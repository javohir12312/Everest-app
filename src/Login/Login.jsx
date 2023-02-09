import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import axios from "../server/api/index";

const Login = () => {
  const onFinish = async (e) => {
    console.log(e);
    try {
      const values = await axios.post("/auth/login", e);
      localStorage.setItem("token", JSON.stringify(values.data.token_response.access_token));
      console.log(values.data.token_response.access_token);
      window.location.assign("/default")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#90CAF9" }}>
      <div
        style={{
          maxWidth: 400,
          minWidth:280,
          height: 400,
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Form
          style={{
            backgroundColor: "white",
            padding: 30,
            borderRadius: 12,
          }}
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <h2>Akauntga Kirish</h2>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="user_type"
            rules={[
              {
                required: true,
                message: "User or Admin!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="type user"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
            <Link to="/forgot-pass" className="login-form-forgot" href="">
              Forgot password
            </Link>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Kirish
            </Button>
            <br />
            <br />
            Yoki <Link to="/register">Ro'yxatdan o'tish!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
