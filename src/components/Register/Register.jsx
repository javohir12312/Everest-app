import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "../../server/api/index";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Register = () => {
  const [btnL, srtBtnL] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const error1 = () => {
    messageApi.open({
      type: "error",
      content: "Bu email ro'yxatda bor yoki hato email",
    });
  };

  const error2 = () => {
    messageApi.open({ 
      type: "error",
      content: "Kodingizda son va harf bo'lishi shart",
    });
  };

  const error3 = () => {
    messageApi.open({
      type: "error",
      content: "Telefon raqam formati xato",
    });
  };

  const onFinish = async (e) => {
    try {
      const resp = await axios.post("/auth/register", e);
      navigate("/verify");
      localStorage.setItem(
        "token",
        JSON.stringify(resp.data.token_response.access_token)
      );
      srtBtnL(true);
    } catch (error) {
      if (error.response.data.error === "email already exists" || error.response.data.error === "Key: 'RegisterRequest.Email' Error:Field validation for 'Email' failed on the 'email' tag") {
        error1();
      } else if (
        error.response.data.error ==
        "password must contain at least one small letter, one capital letter, one number, one symbol"
      ) {
        error2();
      } else if (
        error.response.data.error ==
        "ey: 'RegisterRequest.Email' Error:Field validation for 'Email' failed on the 'email' tag"
      ) {
        error3();
      } else {
        console.log(error);
      }
    }
  };

  setTimeout(() => {
    setLoading(false);
  }, 200);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="login-page">
          {contextHolder}
          <div style={{ maxWidth: 1200, width: "100%" }} className="login-box">
            <div className="illustration-wrapper">
              <img src="../assets/images/amdin-logo.avif" alt="Login" />
            </div>
            <Form
              name="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <h1 className="form-title">Hush kelibsiz</h1>
              <Form.Item
                name="email"
                type="email"
                rules={[
                  { required: true, message: "Iltimos emailingizni kiriting" },
                ]}
              >
                <Input placeholder="email" />
              </Form.Item>
              <Form.Item
                name="first_name"
                rules={[
                  { required: true, message: "Iltimos Ismingizni kiriting" },
                ]}
              >
                <Input placeholder="Ismingiz" />
              </Form.Item>
              <Form.Item
                name="last_name"
                type="last_name"
                rules={[
                  {
                    required: true,
                    message: "Iltimos Familiyangizni kiriting",
                  },
                ]}
              >
                <Input placeholder="Famliyangiz" />
              </Form.Item>
              <Form.Item
                name="password"
                type="password"
                rules={[
                  { required: true, message: "Iltimos Parolingizni kiriting" },
                ]}
              >
                <Input.Password placeholder="kodingizda katta harf va son bo'lishi kerak" />
              </Form.Item>

              <Form.Item
                name="phone_number"
                rules={[
                  {
                    required: true,
                    message: "Iltimos telefon raqamingizni kiriting",
                  },
                ]}
              >
                <Input type="number" placeholder="Telfon raqamingiz" />
              </Form.Item>
              <Link to={"/login"}>Menda akaunt bor</Link>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {btnL ? "loading..." : "Ro'yxatdan o'tish"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
