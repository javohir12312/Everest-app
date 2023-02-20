import {
  DiffOutlined,
  UserOutlined,
  PlusCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Button, Modal, Input, Form, message } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "../../../server/api/index";
import "./Admin.scss";

const { Content, Footer, Sider } = Layout;

const Admin = () => {
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const onFunction = async () => {
      try {
        const resp = await axios.get("/categories");
        setCategories(resp.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    onFunction();
  }, [categories]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Muvaffaqiyatli qo'shildi",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Qandaydir xatolik yuz berdi iltimos qayta urinib ko'ring",
    });
  };

  const onSubmit = async (evt) => {
    try {
      const resp = await axios.post("/categories", evt);
      if (resp.status === 201) {
        success();
      } else {
        error();
      }
    } catch (error) {
      console.log(error);
    }
    form.resetFields();
  };

  return (
    <div>
      {contextHolder}
      {localStorage.getItem("token") ? (
        <>
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider style={{ backgroundColor: "#28156E" }}>
              <div
                style={{
                  height: 32,
                  margin: "20px 16px 12px",
                }}
              >
                <h2 style={{ margin: 0, fontSize: 20, color: "white" }}>
                  Boshqaruv Bo'limi
                </h2>
              </div>

              <div>
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "95%",
                    marginRight: "auto",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    color: "white",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  onClick={showModal}
                >
                  Qo'shish <PlusCircleOutlined />
                </Button>
                <Modal
                  title="Yangi fan qo'shish"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <Form onFinish={(evt) => onSubmit(evt)}>
                    <Form.Item
                      label={"Yo'nalish"}
                      name={"title"}
                      rules={[
                        {
                          required: true,
                          message: "Iltimos yo'nalishni kiriting",
                        },
                      ]}
                    >
                      <Input placeholder="Fan nomini kiritig" />
                    </Form.Item>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: 20,
                      }}
                    >
                      <Button
                        style={{ marginRight: 15 }}
                        onClick={handleCancel}
                      >
                        Bekor qilish
                      </Button>
                      <Button
                        style={{ backgroundColor: "#28156E", color: "white" }}
                        htmlType="submit"
                        onClick={handleOk}
                      >
                        Qo'shish
                      </Button>
                    </div>
                  </Form>
                </Modal>
              </div>

              <ul className="categoryRender">
                <li>
                  <Link to={""}>
                    ASOSIY <DiffOutlined />
                  </Link>
                </li>
                {categories.map((el) => {
                  return (
                    <li key={el.id}>
                      <Link className="categorieLink" to={el.title}>
                        {el.title.toUpperCase()} <span>{el.id}</span>
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link to={"users"}>
                    FOYDALANUVCHILAR <TeamOutlined />
                  </Link>
                </li>
                <li>
                  <Link to={"account"}>
                    MENING HISOBIM <UserOutlined />
                  </Link>
                </li>
              </ul>
            </Sider>
            <Layout className="site-layout">
              <Content
                style={{
                  margin: "30px 16px 0",
                }}
              >
                <Outlet></Outlet>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
              >
                Micromania
              </Footer>
            </Layout>
          </Layout>
        </>
      ) : (
        window.location.assign("/admin")
      )}
    </div>
  );
};
export default Admin;
