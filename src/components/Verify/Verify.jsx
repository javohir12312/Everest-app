import { Button, Form, Input } from "antd";
import axios from "../../server/api/index";
import React from "react";

const Verify = () => {
  const onFinish = async (e) => {
    console.log(e);
    try {
      const resp = await axios.post("/auth/verify", e);
      localStorage.setItem("token", JSON.stringify(resp.data.access_token));
      setTimeout(() => {
        window.location.assign("/default");
      },1000)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item label="code" name="code">
          <Input placeholder="Verify code" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Your Email" />
        </Form.Item>

        <Form.Item label="code" name="code">
          <Button htmlType="submit" type="primary">
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Verify;
