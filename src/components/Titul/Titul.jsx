import React from "react";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import '../Titul/Titul.scss'

const Titul = () => {
  const  answers  = JSON.parse(localStorage.getItem("answers"));
  const { first_name } = JSON.parse(localStorage.getItem("user"));

  const count = answers.filter((item) => item.is_true).length;

  return (
    <div>
      <h5 className="title">
        Hurmatli {first_name} sizning tog'ri belgilagan javoblaringiz!
      </h5>
      <ul className="answers-list">
        {answers.map((item, index) => (
          <li key={index} className={item.is_true ? "correct" : "incorrect"}>
            {index + 1}
            {item.is_true ? <FcCheckmark /> : <FcCancel />}
          </li>
        ))}
      </ul>
      <div>
        <h4 className="total">
          Sizning jami tog'ri javoblaringiz soni {count} ta
        </h4>
      </div>
    </div>
  );
};

export default Titul;
