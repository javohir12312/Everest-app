import { Button, Empty, Form, Radio, Select, Space, Spin } from "antd";
import axios from "../../server/api/index";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../../slice";

const Test = React.memo(() => {
  const [data, setData] = useState([]);
  const [test, setTest] = useState([]);
  const [level, setlevel] = useState();
  const [lang, setLang] = useState();
  const [dis, setDis] = useState(false);
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const loc = () => {
      if (localStorage.getItem("token")) {
        return null;
      } else {
        window.location = "/login";
      }
    };
    loc();
  }, []);

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

  const getTests = useCallback(
    async (id) => {
      try {
        const rest = await axios.get(
          `/tests?category_id=${id}&difficulty=${level}&lang=${lang}`
        );
        setDis(true);
        setLoad(true);
        setTimeout(() => {
          setLoad(false);
        }, 1500);
        setTest(rest.data.tests);
      } catch (error) {
        console.log(error);
      }
    },
    [level, lang]
  );

  const onFinish = useCallback(
    async (values) => {
      const chosenOptions = test.map((item) => ({
        chosen_option: values[item.id] === undefined ? "" : values[item.id],
        test_id: item.id,
      }));
      const obj = {
        tests: chosenOptions,
      };
      try {
        const rest = await axios.post(
          "/tests/check-answers",
          JSON.stringify(obj)
        );

        dispatch(addData(rest.data.checked_tests));

        navigate("/titul");
      } catch (error) {
        console.log(error);
      }
    },
    [test, navigate]
  );

  const handleCategoryChange = useCallback(
    (id) => {
      getTests(id);
    },
    [getTests]
  );

  console.log(test);
  return (
    <div>
      {dis ? null : (
        <div
          style={{
            maxWidth: 700,
            flexWrap: "wrap",
            gap: 20,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Select
            onChange={(e) => setlevel(e)}
            style={{
              width: "200px",
              textAlign: "center",
              margin: "0 auto",
              display: "block",
            }}
            defaultValue="Qiyinlik darajasi"
          >
            <Select.Option style={{ textAlign: "center" }} value="medium">
              O'rta
            </Select.Option>
            <Select.Option style={{ textAlign: "center" }} value="hard">
              Qiyin
            </Select.Option>
          </Select>

          <Select
            onChange={(e) => setLang(e)}
            style={{
              width: "200px",
              textAlign: "center",
              margin: "0 auto",
              display: "block",
            }}
            defaultValue="Til"
          >
            <Select.Option style={{ textAlign: "center" }} value="uz">
              Uz
            </Select.Option>
            <Select.Option style={{ textAlign: "center" }} value="ru">
              Ru
            </Select.Option>
          </Select>
          <Select
            disabled={lang !== undefined && level !== undefined ? false : true}
            style={{
              width: "200px",
              margin: "0 auto",
              display: "block",
              textAlign: "center",
            }}
            defaultValue={"Fanni tanlang"}
            onChange={handleCategoryChange}
          >
            {data !== undefined
              ? data.map((item) => {
                  return (
                    <Select.Option
                      style={{ textAlign: "center" }}
                      key={item.id}
                      value={item.category_id}
                      id={item.category_id}
                    >
                      {item.title}
                    </Select.Option>
                  );
                })
              : null}
          </Select>
        </div>
      )}

      {test.length > 0 ? (
        <Form
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          onFinish={onFinish}
        >
          {load ? (
            <Space style={{width:"100%",height:"300px", display:"flex",alignItems:"center",justifyContent:"center"}} size="middle">
              <Spin size="large" />
            </Space>
          ) : (
            test.map((item, index) => {
              return (
                <React.Fragment key={item.id}>
                  <h4>
                    {index + 1}. {item.question}
                  </h4>
                  <img
                    style={{ margin: "30px 0" }}
                    src={item.question_image_url}
                    alt=""
                    width={200}
                  />
                  {item.options.map((item2) => {
                    return (
                      <Form.Item
                        key={item2.id}
                        style={{
                          maxWidth: 500,
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
                </React.Fragment>
              );
            })
          )}
          {load ? null : (
            <Button type="primary" htmlType="submit">
              Jo'natish
            </Button>
          )}
        </Form>
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBlock: "200px",
          }}
        >
          <Empty></Empty>
        </div>
      )}
    </div>
  );
});

export default Test;
