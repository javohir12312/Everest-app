import { Button, Checkbox, Form, Radio, Select, Space } from "antd";
import axios from "../../server/api/index";
import React, { useEffect } from "react";
import { useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [test, setTest] = useState([]);

  function loc() {
    if (localStorage.getItem("token")) {
      return null;
    } else {
      window.location = "/login";
    }
  }
  loc();

  useEffect(() => {
    const getData = async () => {
      try {
        const rest = await axios.get("/categories");
        setData(rest.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getTest = async () => {
      const rest = await axios.get(
        `/tests?category_id=2&difficulty=medium&lang=uz`
      );
      setTest(rest.data.tests);
    };

    getTest();
  }, []);

  async function Finish(e) {
    const values = [];
    for (let i = 0; i < test.length; i++) {
      const data1 = {
        chosen_option: e[test[i].id] === undefined ? "" : e[test[i].id],
        test_id: test[i].id,
      };
      console.log(data1);
      values.push(data1);
    }
    const obj = {
      tests: values,
    };
    console.log(obj);
    try {
      const rest = await axios.post(
        "/tests/check-answers",
        JSON.stringify(obj)
      );
      console.log(rest);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div>
        <Select
          style={{
            margin: "0 auto",
            display: "block",
            maxWidth: "500px",
            textAlign: "center",
          }}
          defaultValue={"Matematika"}
        >
          {data.map((item) => {
            return (
              <Select.Option
                style={{ textAlign: "center" }}
                key={item.id}
                value={item.title}
              >
                {item.title}
              </Select.Option>
            );
          })}
        </Select>
      </div>

      <Form
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        onFinish={Finish}
      >
        {test.map((item) => {
          return (
            <>
              <h2>{item.question}</h2>
              {item.options.map((item2) => {
                return (
                  <Form.Item
                    style={{
                      width: 500,
                      margin: "10px auto",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    name={item2.id}
                  >
                    <Form.Item name={item.id}>
                      <Radio.Group>
                        <Radio.Button
                          style={{ minWidth: "150px", textAlign: "center" }}
                          value={item2.title}
                        >
                          {item2.title}
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </Form.Item>
                );
              })}
            </>
          );
        })}

        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Test;
