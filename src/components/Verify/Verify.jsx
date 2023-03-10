import { Button, Form, Input } from "antd";
import axios from "../../server/api/index";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Verify = React.memo(() => {

  const navigate = useNavigate();

  const onFinish = async (e) => {
    try {
      const resp = await axios.post("/auth/verify", e);
        navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    alert("Emailingizga tasdiqlash kodi yuborildi");
  }, []);

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
        <h6 style={{ textAlign: "center", marginBottom: "20px" }}>
          Tasdiqlash kodini kiriting
        </h6>
        <Form.Item label="code" name="code">
          <Input placeholder="Tasdiqlash kodi code" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Sizning Email" />
        </Form.Item>

        <Button style={{ width: "100%" }} htmlType="submit" type="primary">
          Tasdiqlash
        </Button>
      </Form>
    </div>
  );
});

export default Verify;
