import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../server/api/index";
import Alert1 from "../Alerts/AlertLogin/Alert";
import "../Login/Login.scss";

const Login = () => {
  /////state alerts
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (e) => {
    console.log(e);
    try {
      const values = await axios.post("/auth/login", e);
      if (values.data.user.type === "admin") {
        navigate("/admin");
      } else {
        navigate("/default");
      }
      console.log(values);
      localStorage.setItem(
        "token",
        JSON.stringify(values.data.token_response.access_token)
      );
      console.log(values.data.token_response.access_token);
    } catch (error) {
      setAlert(true);
      console.log(error);
      setTimeout(() => {
        setAlert(false);
      }, 1000);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#90CAF9",
        position: "relative",
      }}
    >
      {alert ? <Alert1 /> : null}
      <div
        style={{
          width: "300px",
          minWidth: "280px",
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
              type="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
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
              style={{ width: "100%" }}
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
