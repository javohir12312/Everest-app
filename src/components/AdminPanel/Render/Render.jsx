import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  Spin,
  Upload,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import axios from "../../../server/api/index";
import { useNavigate } from "react-router-dom";

const Render = ({ elTitle }) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(0);

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Muvaffaqiyatli yuklandi",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Qandaydir xatolik yuz berdi iltimos qayta urinib ko'ring",
    });
  };

  const onFunction = async () => {
    try {
      const resp = await axios.get(`/categories`);
      setCategories(resp.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onFunction();
    categories.map((el) => {
      return el.title === elTitle ? setId(el.id) : null;
    });
  }, [setId, elTitle, categories]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDel, setIsModalOpenDel] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalDel = () => {
    setIsModalOpenDel(true);
  };
  const handleOkDel = () => {
    setIsModalOpenDel(false);
  };
  const handleCancelDel = () => {
    setIsModalOpenDel(false);
  };

  const onSubmit = async (evt, id) => {
    try {
      const resp = await axios.put(`/categories/${id}`, evt);
      if (resp.status === 201) {
        success();
        onFunction()
      } else {
        error();
      }
    } catch (error) {
      error();  
      console.log(error);
    }
    navigate("/admin");
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(`/categories/${id}`);
    } catch (error) {
      console.log(error);
    }
    navigate("/admin");
  };

  const onSubmitQuation = async (evt, id) => {
    const formData = new FormData();
    formData.append("category_id", id);
    formData.append("difficulty", evt.difficulty);
    formData.append("lang", evt.lang);
    formData.append("file", evt.file.file);
    try {
      const resp = await axios.post("/tests", formData);
      if (resp.data.message === "Tests has been successfully added!") {
        success();
      } else {
        error();
      }
    } catch (error) {
      console.log(error);
    }
    form.resetFields();
  };

  const onCleanQuation = () => {
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      {id.length === 0 ? (
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
        <>
          <h2
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 15,
              marginTop: 0,
              marginBottom: 20,
              fontSize: 22,
            }}
          >
            <p style={{ margin: 0 }}>Id: {id}</p>
            <p style={{ margin: 0 }}>Bo'lim: {elTitle.toUpperCase()}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div>
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={showModal}
                >
                  <EditOutlined />
                </Button>
                <Modal
                  title="O'zgartirish"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <Form onFinish={(evt) => onSubmit(evt, id)}>
                    <Form.Item
                      label={"Yangi bo'lim nomini kiriting"}
                      name={"title"}
                      rules={[
                        {
                          required: true,
                          message: "Iltimos Bo'lim nomini kiriting",
                        },
                      ]}
                    >
                      <Input placeholder="Yangi bo'lim nomini kiriting"></Input>
                    </Form.Item>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 20,
                      }}
                    >
                      <Button
                        style={{ display: "block" }}
                        onClick={handleCancel}
                      >
                        Bekor qilish
                      </Button>
                      <Button
                        style={{ display: "block", backgroundColor: "#28156E" }}
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
              <div>
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={showModalDel}
                >
                  <DeleteOutlined />
                </Button>
                <Modal
                  title="O'chirish"
                  open={isModalOpenDel}
                  onOk={handleOkDel}
                  onCancel={handleCancelDel}
                  footer={null}
                >
                  <h6>Bu b'limni o'chirsangiz bo'lim ichidagi testlar ham o'chib ketadi!</h6>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 20,
                        marginTop: 20,
                      }}
                    >
                      <Button
                        style={{ display: "block" }}
                        onClick={handleCancelDel}
                      >
                        Bekor qilish
                      </Button>
                      <Button
                        style={{ display: "block", backgroundColor: "#28156E" }}
                        type="primary"
                        onClick={() => {handleCancelDel(); onDelete(id)}}
                      >
                        Tasdiqlash
                      </Button>
                    </div>
                </Modal>
              </div>
            </div>
          </h2>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: 20 }}>Savol qo'shish</h3>
              <Form
                style={{ width: 800 }}
                onFinish={(evt) => onSubmitQuation(evt, id)}
                form={form}
              >
                {/* <Form.Item
                  label={"Bo'lim Id raqamini kiriting"}
                  name={"category_id"}
                  rules={[
                    {
                      required: true,
                      message: "Iltimos bo'lim Id raqamini kiriting",
                    },
                  ]}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Bo'lim id raqamini kiriting"
                  />
                </Form.Item> */}
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
                    <Select.Option value="uz">UZB</Select.Option>
                    <Select.Option value="ru">RUS</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Savollarni yuklash"
                  name="file"
                  rules={[
                    {
                      required: true,
                      message: "Iltimos excel faylni yuklang",
                    },
                  ]}
                >
                  <Upload
                    maxCount={1}
                    beforeUpload={() => {
                      return false;
                    }}
                    listType="excel-file"
                    accept=".xls, .xlsx"
                  >
                    <Button icon={<UploadOutlined />}>
                      Excel faylni yuklang
                    </Button>
                  </Upload>
                </Form.Item>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  <Button onClick={onCleanQuation}>Bekor qilish</Button>
                  <Button
                    type="primary"
                    style={{ backgroundColor: "#28156E" }}
                    htmlType="submit"
                  >
                    Qo'shish
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Render;
