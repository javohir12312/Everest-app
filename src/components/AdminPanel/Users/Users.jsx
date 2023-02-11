import React, { useEffect, useState } from "react";
import axios from "../../../server/api/index";
import { UserDeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import dayjs from "dayjs";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [delId, setDelId] = useState();

  useEffect(() => {
    const onFunction = async () => {
      try {
        const resp = await axios.get("/users");
        setUsers(resp.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    onFunction();
  }, [users]);

  const onDelete = async (id) => {
    try {
      await axios.delete(`/user/${id}`);
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

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>FOYDALANUVCHILAR</h2>
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
                    style={{ display: "flex", alignItems: "center" }}
                    type="primary"
                    onClick={(evt) => (showModal(), setDelId(evt.target.parentNode.parentNode.parentNode.id))}
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
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button style={{ marginRight: 15 }} onClick={handleOk}>
                        Bekor qilish
                      </Button>
                      <Button type="primary" onClick={() => (handleCancel(), onDelete(delId))}>
                        O'chirish
                      </Button>
                    </div>
                  </Modal>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
