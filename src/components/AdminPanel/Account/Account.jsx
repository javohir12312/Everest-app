import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import axios from "../../../server/api/index";
import { Button, Modal, Form, Input, Spin, Result } from "antd";
import { Link } from "react-router-dom";

const Account = () => {
  const id = window.localStorage.getItem("id");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  const onFunction = async (id) => {
    try {
      const resp = await axios.get(`/users/${id}`);
      setUsers(resp.data);
      if (error === true) {
        setError(false)
      }
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        setError(true)
      }
    }
  };
  useEffect(() => {
    onFunction(id);
  }, [id, users]);

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

  const onSubmit = async (evt) => {
    try {
      await axios.put(`/user/${id}`, evt);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {error === true ? <Result
        status="error"
        title="Xavfsizlik ma'lumotlari eski"
        subTitle="Iltimos qaytadan kiring"
        extra={[
          <Link to={"/login"}>
            <Button type="primary" key="console">
              Kirish
            </Button>
          </Link>
        ]}
      >
      </Result> : <><h2 style={{ marginTop: 0, marginBottom: 45 }}>MENING HISOBIM</h2>
        {users.length === 0 ? (
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              translate: "-50%",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "white",
              padding: "35px",
              borderRadius: "15px",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 25,
                width: 800,
                listStyle: "none",
                margin: 0,
                marginBottom: 30,
                padding: 0,
              }}
            >
              <li style={{ fontSize: 22, display: "flex" }}>
                <strong>Ism</strong>
                <span
                  style={{
                    width: 500,
                    display: "block",
                    textAlign: "left",
                    marginLeft: "auto",
                  }}
                >
                  {users.first_name}
                </span>
              </li>
              <li style={{ fontSize: 22, display: "flex" }}>
                <strong>Familiya</strong>
                <span
                  style={{
                    width: 500,
                    display: "block",
                    textAlign: "left",
                    marginLeft: "auto",
                  }}
                >
                  {users.last_name}
                </span>
              </li>
              <li style={{ fontSize: 22, display: "flex" }}>
                <strong>Taxallus</strong>
                <span
                  style={{
                    width: 500,
                    display: "block",
                    textAlign: "left",
                    marginLeft: "auto",
                  }}
                >
                  {users.username}
                </span>
              </li>
              <li style={{ fontSize: 22, display: "flex" }}>
                <strong>Telefon raqam</strong>
                <span
                  style={{
                    width: 500,
                    display: "block",
                    textAlign: "left",
                    marginLeft: "auto",
                  }}
                >
                  {users.phone_number}
                </span>
              </li>
              <li style={{ fontSize: 22, display: "flex" }}>
                <strong>Elektron pochta</strong>
                <span
                  style={{
                    width: 500,
                    display: "block",
                    textAlign: "left",
                    marginLeft: "auto",
                  }}
                >
                  {users.email}
                </span>
              </li>
              <li style={{ fontSize: 22, display: "flex" }}>
                <strong>Qo'shilgan vaqti</strong>
                <span
                  style={{
                    width: 500,
                    display: "block",
                    textAlign: "left",
                    marginLeft: "auto",
                  }}
                >
                  {dayjs(users.created_at).format("MMMM D, YYYY h:mm A")}
                </span>
              </li>
            </ul>
            <div>
              <Button
                style={{ marginLeft: "auto", display: "block" }}
                size={"large"}
                type="primary"
                onClick={showModal}
              >
                Ma'lumotlarni o'zgartirish
              </Button>
              <Modal
                title="Ma'lumotlarni o'zgartirish"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
              >
                <Form
                  style={{ marginTop: 25 }}
                  onFinish={(evt) => onSubmit(evt)}
                  initialValues={{
                    first_name: users.first_name,
                    last_name: users.last_name,
                    username: users.username,
                    phone_number: users.phone_number,
                    email: users.email,
                  }}
                >
                  <Form.Item
                    label={"Ism"}
                    name={"first_name"}
                    rules={[
                      { required: true, message: "Iltimos ismingizni kiriting" },
                    ]}
                  >
                    <Input placeholder="Ism"></Input>
                  </Form.Item>
                  <Form.Item
                    label={"Familiya"}
                    name={"last_name"}
                    rules={[
                      {
                        required: true,
                        message: "Iltimos familiyangizni kiriting",
                      },
                    ]}
                  >
                    <Input placeholder="Familiya"></Input>
                  </Form.Item>
                  <Form.Item label={"Taxallus"} name={"username"}>
                    <Input placeholder="Tazxallus"></Input>
                  </Form.Item>
                  <Form.Item
                    label={"Tel raqam"}
                    name={"phone_number"}
                    rules={[
                      {
                        required: true,
                        message: "Iltimos tel raqamingizni kiriting",
                      },
                    ]}
                  >
                    <Input placeholder="Telefon raqam"></Input>
                  </Form.Item>
                  <Form.Item
                    label={"Email"}
                    name={"email"}
                    rules={[
                      {
                        required: true,
                        message: "Iltimos email manzilingizni kiriting",
                      },
                    ]}
                  >
                    <Input placeholder="Elektron pochta"></Input>
                  </Form.Item>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: 20,
                      marginTop: 40,
                    }}
                  >
                    <Button style={{ display: "block" }} onClick={handleCancel}>
                      Bekor qilish
                    </Button>
                    <Button
                      style={{ display: "block" }}
                      type="primary"
                      htmlType="submit"
                      onClick={handleCancel}
                    >
                      Tasdiqlash
                    </Button>
                  </div>
                </Form>
              </Modal>
            </div>
          </div>
        )}</>}
    </>
  );
};
export default Account;
