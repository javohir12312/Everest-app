import { Button, Form, Select, Empty } from "antd";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../server/api/index";

const Main = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [evt, setEvent] = useState([]);
  const [form] = Form.useForm();

  const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
  if (user.type !== "admin") {
    navigate("/");
  }
  const getTests = useCallback(async () => {
    const rest = await axios.get("/categories");
    setCategories(rest.data.categories);
  }, []);

  useEffect(() => {
    getTests();
  }, [getTests, categories]);

  const onSubmit = async (evt) => {
    setEvent(evt);
    try {
      const { data } = await axios.get(
        `/tests?category_id=${evt.category_id}&difficulty=${evt.difficulty}&lang=${evt.lang}`
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

  return (
   <>
   {user.type == "admin" ?  <>
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
              <li style={{ width: "12%", fontSize: 22 }}>
                <strong>Rasm</strong>
              </li>
              <li style={{ width: "12%", fontSize: 22 }}>
                <strong>Javob 1</strong>
              </li>
              <li style={{ width: "12%", fontSize: 22 }}>
                <strong>Javob 2</strong>
              </li>
              <li style={{ width: "12%", fontSize: 22 }}>
                <strong>Javob 3</strong>
              </li>
              <li style={{ width: "12%", fontSize: 22 }}>
                <strong>Javob 4</strong>
              </li>
              <li style={{ width: "12%", fontSize: 22 }}>
                <strong>To'g'ri javob</strong>
              </li>
            </ul>
            <div>
              {options.length === 0 ? (
                <div style={{ marginTop: 80 }}>
                  <Empty />
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
                      <li style={{ width: "12%", fontSize: 18 }}>
                        {el.question_image_url === true
                          ? el.question_image_url
                          : "Rasim yo'q"}
                      </li>
                      {el.options.map((el) => {
                        return (
                          <li style={{ width: "12%", fontSize: 18 }}>
                            {el.title}
                          </li>
                        );
                      })}
                      <li style={{ width: "12%", fontSize: 18 }}>
                        {el.answer_option}
                      </li>
                    </ul>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </> : null}
   </>
  );
};
export default Main;
