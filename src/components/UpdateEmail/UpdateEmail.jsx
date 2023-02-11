import React from "react";
import { Button, Form, Input } from "antd";
import axios from "../../server/api/index";
import { useNavigate } from "react-router-dom";

const UpdateEmail = () => {
  const navigate = useNavigate()
  const onFinish = async (e) => {
    console.log(e);
    try {
      const resp = await axios.post("/auth/update-email", e);
      localStorage.setItem("token", JSON.stringify(resp.data.access_token));
      console.log(resp.data.access_token);
      setTimeout(() => {
      navigate("/newEmail")
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{width:"100%", height:"100vh", background:"#90CAF9"}}>
      <Form
        onFinish={onFinish}
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
      >
        <h5 style={{ textAlign: "left", marginBottom: 20 }}>Forgot Email</h5>

        <Form.Item name="email" label="email">
          <Input type="email" placeholder="Sizning emailingiz" />
        </Form.Item>

        <Button style={{ width: "100%" }} htmlType="submit" type="primary">
          Kod yuborish
        </Button>
      </Form>
    </div>
  );
};

export default UpdateEmail;
