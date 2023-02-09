import { Button, Form, Input } from "antd";
import axios from "../../server/api/index";

const ForgotPs = () => {

    const onFinish = async (e) => {
        console.log(e);
    try {
        const values = await axios.post("/auth/forgot-password",e)
        window.location.href = "/forgot-verify";
        console.log(values);
    } catch (error) {
        
    }
    }

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#90CAF9" }}>
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
        <h5 style={{ textAlign: "left", marginBottom:20 }}>Forgot Password</h5>

        <Form.Item name={"email"} label="email">
          <Input placeholder="Sizning emailingiz" />
        </Form.Item>

        <Button style={{width:"100%"}} htmlType="submit" type="primary">
          Kod yuborish
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPs;
