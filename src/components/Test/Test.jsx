import { Button, Checkbox, Form, Radio, Select, Space } from "antd";
import axios from "../../server/api/index";
import React, { useEffect } from "react";
import { useState } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [test, setTest] = useState([]);
  const [answer, setAnswer] = useState();

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
      } catch (error) {}
    };

    const getTest = async () => {
      const rest = await axios.get(
        "/tests?category_id=1&difficulty=hard&lang=uz"
      );
      setTest(rest.data.tests);
      console.log(rest);
    };

    getTest();

    getData();
  }, []);

  function getAnswers() {
    console.log(answer);
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        console.log();
        console.log("xa");
      }
    }, 2000);
  }

  const handleChange = () => {
    getAnswers();
  };

  function Finish(e) {
    setAnswer(e);
  }

  console.log(test);
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

      <Form onFinish={Finish}>
        {test.map((item, index) => {
          return (
            <>
              <h2>{item.id}</h2>
              {item.options.map((item2) => {
                return (
                  <Form.Item
                    style={{
                      width: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    name={item.id}
                    label={
                      <label
                        name={item.id}
                        style={{ minWidth: 200, textAlign: "left" }}
                      >
                        "lorem Ips lorem29 "
                      </label>
                    }
                  >
                    <Radio.Group>
                      {" "}
                      <Radio.Button value={item2.title}>
                        {item2.title}
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                );
              })}
            </>
          );
        })}

        <Button onClick={handleChange} type="primary" htmlType="submit">
          Sn
        </Button>
      </Form>
    </div>
  );
};

export default Test;
