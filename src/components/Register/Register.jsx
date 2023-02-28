import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "../../server/api/index";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Register = React.memo(() => {
  const [btnL, srtBtnL] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const openErrorMessage = (content) => {
    messageApi.open({ type: "error", content });
  };

  const error1 = () => {
    openErrorMessage("Bu email ro'yxatda bor yoki hato email");
  };

  const error2 = () => {
    openErrorMessage("Kodingizda son va harf bo'lishi shart");
  };

  const error3 = () => {
    openErrorMessage("Telefon raqam formati xato");
  };

  const { TextArea } = Input;

  const onFinish = async (values) => {
    try {
      srtBtnL(true);
      const resp = await axios.post("/auth/register", values);
      console.log(values);
      navigate("/verify");
    } catch (error) {
      if(error.response.data.error == "email already exists"){
        alert("Bu email ro'yxatda bor")
      }else{ console.log(error);}

    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="login-page">
          {contextHolder}
          <div style={{ maxWidth: 1200, width: "100%" }} className="login-box">
            <div className="illustration-wrapper">
              <img src="../assets/images/register.avif" alt="Login" />
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
                <Input placeholder="Telfon raqamingiz" />
              </Form.Item>
              <Link to={"/login"}>Menda akaunt bor</Link>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                 Ro'yxatdan o'tish
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
});

export default Register;
