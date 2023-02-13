import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../server/api/index";
import Alert1 from "../Alerts/AlertFP/Alert";

const ForgotPs = () => {
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();
  const onFinish = async (e) => {
    try {
      await axios.post("/auth/forgot-password", e);
      navigate("/forgot-verify");
    } catch (error) {
      setAlert(true);
      <audio src="../components/sound/sounds.mp3" autoplay></audio>;
      setTimeout(() => {
        setAlert(false);
      }, 1000);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#90CAF9" }}>
      {alert ? <Alert1 /> : console.log("yo")}
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
        <h5 style={{ textAlign: "left", marginBottom: 20 }}>Forgot Password</h5>

        <Form.Item name={"email"} label="email">
          <Input placeholder="Sizning emailingiz" />
        </Form.Item>

        <Button style={{ width: "100%" }} htmlType="submit" type="primary">
          Kod yuborish
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPs;
