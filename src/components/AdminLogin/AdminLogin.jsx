import { Button, Form, Input } from "antd";
import React from "react";
import "../AdminLogin/A_Login.scss";

const AdminLogin = () => {

    const obj = {
        username: "javohir",
        password: "123"
    }

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("login", JSON.stringify(values));

    Login();
  };

  function Login() {
    const user = JSON.parse(localStorage.getItem("login"));
    console.log(user);
    if (obj.username === user.username && obj.password === user.password) {
      window.location.assign("/admin");
    } else {
      return null;
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Hush kelibsiz</p>
          <p>Admin Paneliga kirish</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
