import { Button, Form, Input } from "antd";
import axios from "../../server/api/index";
import React from "react";
import { useNavigate } from "react-router-dom";

const NewPass = () => {
  const navigate = useNavigate();
  const onFinish = async (e) => {
    try {
      await axios.post("/auth/update-password", e);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#90CAF9" }}>
      <Form
        style={{
          maxWidth: "400px",
          minWidth: "300px",
          background: "white",
          padding: 30,
          borderRadius: 12,
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onFinish={onFinish}
      >
        <Form.Item name="password" label="Parol">
          <Input placeholder="yangi parol" />
        </Form.Item>

        <Button
          htmlType="submit"
          style={{ backgroundColor: "yellow" }}
          type="dashed"
        >
          Yangi kodni tasdiqlash
        </Button>
      </Form>
    </div>
  );
};

export default NewPass;
