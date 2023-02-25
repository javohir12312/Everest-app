import React, { useEffect, useState } from "react";
import axios from "../../../server/api/index";
import { UserDeleteOutlined } from "@ant-design/icons";
import { Button, Modal, Result, Spin } from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const Users = React.memo(() => {
  const [users, setUsers] = useState([]);
  const [delId, setDelId] = useState();
  const [error, setError] = useState(false);

  const getUsers = useCallback(async () => {
    const rest = await axios.get(`/users`);
    setUsers(rest.data.users);
    if (rest) {
      setError(false)
    } else {
      setError(true)
    }
  }, []);

  useEffect(() => {
    getUsers()
  }, [getUsers]);

  const onDelete = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
console.log();
  return (
    <div>
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
      </Result> : <><h2 style={{ marginBottom: 20 }}>FOYDALANUVCHILAR</h2>
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
          <table className="table">
            <thead>
              <tr>
                <th style={{ fontSize: 22 }} scope="col">
                  ID
                </th>
                <th style={{ fontSize: 22 }} scope="col">
                  Ism
                </th>
                <th style={{ fontSize: 22 }} scope="col">
                  Familiya
                </th>
                <th style={{ fontSize: 22 }} scope="col">
                  Telefon raqam
                </th>
                <th style={{ fontSize: 22 }} scope="col">
                  Elektron pochta
                </th>
                <th style={{ fontSize: 22 }} scope="col">
                  Qo'shilgan vaqti
                </th>
                <th style={{ fontSize: 22 }} scope="col">
                  O'chirish
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((el) => {
                if (el.type === "admin") {
                  return null;
                } else {
                  return (
                    <tr key={el.id} id={el.id}>
                      <th style={{ fontSize: 17 }} scope="row">
                        {el.id}
                      </th>
                      <td style={{ fontSize: 18 }}>{el.first_name}</td>
                      <td style={{ fontSize: 18 }}>{el.last_name}</td>
                      <td style={{ fontSize: 18 }}>
                        <a
                          style={{ color: "black", textDecoration: "underline" }}
                          href={`tel:${el.phone_number}`}
                        >
                          {el.phone_number}
                        </a>
                      </td>
                      <td style={{ fontSize: 18 }}>
                        <a
                          style={{ color: "black", textDecoration: "underline" }}
                          href={`mailto:${el.email}`}
                        >
                          {el.email}
                        </a>
                      </td>
                      <td style={{ fontSize: 18 }}>
                        {dayjs(el.created_at).format("MMMM D, YYYY h:mm A")}
                      </td>
                      <td style={{ fontSize: 18 }}>
                        <Button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#28156E",
                            color: "white",
                          }}
                          onClick={(evt) => (
                            showModal(),
                            setDelId(
                              evt.target.parentNode.parentNode.parentNode.id
                            )
                          )}
                        >
                          O'chirish <UserDeleteOutlined />
                        </Button>
                        <Modal
                          title="O'chirish"
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          footer={null}
                        >
                          <p style={{ fontSize: 17 }}>
                            Ushbu foydalanuvchini ro'yxatdan o'chirmoqchimisiz
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Button
                              style={{ marginRight: 15 }}
                              onClick={handleOk}
                            >
                              Bekor qilish
                            </Button>
                            <Button
                              style={{
                                backgroundColor: "#28156E",
                                color: "white",
                              }}
                              onClick={() => (handleCancel(), onDelete(delId))}
                            >
                              O'chirish
                            </Button>
                          </div>
                        </Modal>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        )}</>}
    </div>
  );
});

export default Users