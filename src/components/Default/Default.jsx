import { Button } from "antd";
import React, { useState } from "react";
import "../Default/Default.scss";

const Default = () => {
  const data = [
    {
      id: 1,
      title: "Title 1",
      question1: "Question 1",
      question2: "Question 2",
      question3: "Question 21",
    },
    {
      id: 2,
      title: "Title 1",
      question1: "Question 3",
      question2: "Question 4",
      question3: "Question 5",
    },
    {
      id: 3,
      title: "Title 1",
      question1: "Question 6",
      question2: "Question 7",
      question3: "Question 8",
    },
    {
      id: 4,
      title: "Title 1",
      question1: "Question 10",
      question2: "Question 11",
      question3: "Question 12",
    },
    {
      id: 5,
      title: "Title 1",
      question1: "Question 34",
      question2: "Question 54",
      question3: "Question 13",
    },
  ];

  const objtrue = [
    {
      id: 1,
      answer: "Question 2",
    },
    {
      id: 2,
      answer: "Question 2",
    },
    {
      id: 3,
      answer: "Question 2",
    },
    {
      id: 4,
      answer: "Question 2",
    },
    {
      id: 5,
      answer: "Question 2",
    },
  ];

  const answers = [];
  function getAnswer(e) {
    if (answers.length == 0 || answers.length == 1 || answers.length >= 2) {
      if (answers.name === e.currentTarget.name || answers.name === null) {
        const new_obj = { ...answers, name: { answer: e.currentTarget.id, id: e.currentTarget.name} }
      } else {
        answers.push({ id: e.currentTarget.id, name: e.currentTarget.name });
        console.log(answers);
      }
    } else if (answers.length > 1) {
      answers.map((item) => {
        if (item.name !== e.currentTarget.name) {
          answers.id = item.id;
        } else if (answers.id !== e.currentTarget.id) {
          answers.push({ id: e.currentTarget.id });
        }
      });
    }
  }

  function Finished() {
    getAnswer();
  }

  return (
    <div className="box">
      <header>
        <div>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <ul className="list">
                  <li>
                    <label htmlFor={item.question1}>
                      {item.question1}
                      <input
                        onChange={getAnswer}
                        type="radio"
                        name={item.id}
                        id={item.question1}
                      />
                    </label>
                  </li>
                  <li>
                    <label htmlFor={item.question2}>
                      {item.question2}
                      <input
                        onChange={getAnswer}
                        type="radio"
                        name={item.id}
                        id={item.question2}
                      />
                    </label>
                  </li>
                  <li>
                    <label htmlFor={item.question3}>
                      {item.question3}
                      <input
                        onChange={getAnswer}
                        type="radio"
                        name={item.id}
                        id={item.question3}
                      />
                    </label>
                  </li>
                </ul>
              </div>
            );
          })}
          <Button onClick={Finished} type="primary">
            Tugatish
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Default;
