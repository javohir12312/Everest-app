import { Button, Form, Input } from "antd";
import axios from "../../server/api/index";
import React from "react";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate()
  const onFinish = async (e) => {
    console.log(e);
    try {
      const resp = await axios.post("/auth/verify", e);
      localStorage.setItem("token", JSON.stringify(resp.data.refresh_token));
      setTimeout(() => {
      navigate("/default")
      },1000)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", background: "#90CAF9" }}>
      <Form
        style={{
          backgroundColor: "white",
          padding: 30,
          borderRadius: 12,
          maxWidth: 400,
          minWidth: "300px",
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onFinish={onFinish}
      >
        <Form.Item label="code" name="code">
          <Input placeholder="Verify code" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Your Email" />
        </Form.Item>

        <Button style={{width:"100%"}} htmlType="submit" type="primary">
          Tasdiqlash
        </Button>
      </Form>
    </div>
  );
};

export default Verify;
