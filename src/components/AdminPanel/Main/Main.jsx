import { Button, Form, Select, Empty, Skeleton, Modal } from "antd";
import React, { useCallback, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "../../../server/api/index";

const Main = () => {
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [evt, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const getTests = useCallback(async () => {
    const rest = await axios.get("/categories");
    setCategories(rest.data.categories);
  }, []);

  useEffect(() => {
    getTests();
  }, [getTests, categories]);

  const onSubmit = async (evt) => {
    setLoading(true);
    setEvent(evt);
    try {
      const { data } = await axios.get(
        `/tests/by/category?category_id=${evt.category_id}&difficulty=${evt.difficulty}&lang=${evt.lang}`
      );
      setOptions(data.tests);
    } catch (error) {
      console.log(error);
    }
    form.resetFields();
  };

  const onCancel = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (options.length > 0) {
      setLoading(false);
    }
  }, [options, setLoading]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const showModal = (id) => {
    setIsModalOpen(true);
    setId(id);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(`tests/one?category_id=${evt.category_id}&id=${id}`);
    } catch (error) {
      console.log(error);
    }
    onSubmit(evt);
  };

  const onDeleteList = async (evt) => {
    try {
      await axios.delete(
        `tests/many?category_id=${evt.category_id}&difficulty=${evt.difficulty}&lang=${evt.lang}`
      );
    } catch (error) {
      console.log(error);
    }
    onSubmit(evt);
  };

  const [isDelListOpen, setIsDelListOpen] = useState(false);
  const showDelList = () => {
    setIsDelListOpen(true);
  };
  const handleOkDelList = () => {
    setIsDelListOpen(false);
  };
  const handleCancelDelList = () => {
    setIsDelListOpen(false);
  };

  return (
    <>
      <h2 style={{ marginTop: 0 }}>ASOSIY</h2>
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ marginTop: 0, fontSize: 22 }}>Qo'shilgan testlar</h3>
          <Form
            style={{
              marginBottom: 20,
              paddingBottom: 20,
              borderBottom: "2px solid #333",
            }}
            form={form}
            onFinish={(evt) => onSubmit(evt)}
          >
            <Form.Item
              label={"Bo'limni tanlang"}
              name={"category_id"}
              rules={[
                {
                  required: true,
                  message: "Iltimos bo'limni tanlang",
                },
              ]}
            >
              <Select placeholder={"Bo'limni tanlang"}>
                {categories.length === 0 ? (
                  <></>
                ) : (
                  categories.map((el) => {
                    return (
                      <Select.Option value={el.id}>
                        {el.title.toUpperCase()}
                      </Select.Option>
                    );
                  })
                )}
              </Select>
            </Form.Item>
            <Form.Item
              label={"Qiyinchilik darajasini tanlang"}
              name={"difficulty"}
              rules={[
                {
                  required: true,
                  message: "Iltimos qiyinchilik darajasini tanlang",
                },
              ]}
            >
              <Select placeholder={"Qiyinchilik darajasini tanlang"}>
                <Select.Option value="medium">O'rta</Select.Option>
                <Select.Option value="hard">Qiyin</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={"Tilni tanlang"}
              name={"lang"}
              rules={[
                {
                  required: true,
                  message: "Iltimos tilni tanlang",
                },
              ]}
            >
              <Select placeholder={"Tilni tanlang"}>
                <Select.Option value="uz">UZ</Select.Option>
                <Select.Option value="ru">RU</Select.Option>
              </Select>
            </Form.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 15,
              }}
            >
              <Button onClick={onCancel}>Bekor qilish</Button>
              <Button
                style={{ backgroundColor: "#28156E", color: "white" }}
                htmlType="submit"
              >
                Savollarni ko'rish
              </Button>
            </div>
          </Form>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                  marginBottom: 10,
                }}
              >
                <div>
                  Bo'lim id raqami: <strong>{evt.category_id}</strong>
                </div>
                <div>
                  Qiyinchilik darajasi: <strong>{evt.difficulty}</strong>
                </div>
                <div>
                  Til turi: <strong>{evt.lang}</strong>
                </div>
              </div>
              {options.length > 0 ? (
                <div>
                  <Button
                    type="primary"
                    onClick={showDelList}
                    icon={<DeleteOutlined />}
                  />
                  <Modal
                    title="Barcha testlarni o'chirish"
                    open={isDelListOpen}
                    onOk={handleOkDelList}
                    onCancel={handleCancelDelList}
                    footer={null}
                  >
                    <p>Siz barcha testlarni o'chirmoqchimisiz ?</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button style={{ marginRight: 15 }} onClick={handleOkDelList}>
                        Bekor qilish
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "#28156E",
                          color: "white",
                        }}
                        onClick={() => {handleCancel(); onDeleteList(evt)}}
                      >
                        O'chirish
                      </Button>
                    </div>
                  </Modal>
                </div>
              ) : null}
            </div>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              <li style={{ width: "7%", fontSize: 22 }}>
                <strong>ID</strong>
              </li>
              <li style={{ width: "19%", fontSize: 22 }}>
                <strong>Savol</strong>
              </li>
              <li style={{ width: "10.5%", fontSize: 22 }}>
                <strong>Rasm</strong>
              </li>
              <li style={{ width: "10.5%", fontSize: 22 }}>
                <strong>Javob 1</strong>
              </li>
              <li style={{ width: "10.5%", fontSize: 22 }}>
                <strong>Javob 2</strong>
              </li>
              <li style={{ width: "10.5%", fontSize: 22 }}>
                <strong>Javob 3</strong>
              </li>
              <li style={{ width: "10.5%", fontSize: 22 }}>
                <strong>Javob 4</strong>
              </li>
              <li style={{ width: "10.5%", fontSize: 22 }}>
                <strong>To'g'ri javob</strong>
              </li>
              <li style={{ width: "10.5%", fontSize: 22 }}>
                <strong>O'chirish</strong>
              </li>
            </ul>
            <div>
              {options.length === 0 ? (
                <div style={{ marginTop: 80 }}>
                  <Empty />
                </div>
              ) : loading ? (
                <div style={{ marginTop: 50 }}>
                  <Skeleton active />
                  <Skeleton active />
                </div>
              ) : (
                options.map((el) => {
                  return (
                    <ul
                      key={el.id}
                      id={el.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: 0,
                        padding: "12px 0",
                        listStyle: "none",
                        borderBottom: "1px solid",
                      }}
                    >
                      <li style={{ width: "7%", fontSize: 17 }}>
                        <strong>{el.id}</strong>
                      </li>
                      <li style={{ width: "19%", fontSize: 18 }}>
                        {el.question}
                      </li>
                      <li style={{ width: "10.5%", fontSize: 18 }}>
                        {el.question_image_url === true
                          ? el.question_image_url
                          : "Rasim yo'q"}
                      </li>
                      {el.options.map((el) => {
                        return (
                          <li style={{ width: "10.5%", fontSize: 18 }}>
                            {el.title}
                          </li>
                        );
                      })}
                      <li style={{ width: "10.5%", fontSize: 18 }}>
                        {el.answer_option}
                      </li>
                      <li style={{ width: "10.5%", fontSize: 18 }}>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => showModal(el.id)}
                        >
                          <DeleteOutlined />
                        </span>
                      </li>
                    </ul>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <Modal
          title="O'chirish"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <p>Siz bu testni o'chirmoqchimisiz ?</p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button style={{ marginRight: 15 }} onClick={handleOk}>
              Bekor qilish
            </Button>
            <Button
              style={{
                backgroundColor: "#28156E",
                color: "white",
              }}
              onClick={() => {
                handleCancel();
                onDelete(id);
              }}
            >
              O'chirish
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Main;
