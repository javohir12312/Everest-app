import React from "react";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { useSelector } from "react-redux";
import "../Titul/Titul.scss";

const Titul = () => {
  const answers = useSelector((state) =>
    state.data.dataArray.length > 1
      ? state.data.dataArray.at(-1)
      : state.data.dataArray[0]
  );
  const { first_name } = JSON.parse(localStorage.getItem("user"));
  // console.log(isTrue);
  const count = answers.filter((item) => item.is_true).length;

  return (
    <div>
      <h5 className="title">
        Hurmatli {first_name} sizni belgilagan javoblaringiz!
      </h5>
      <ul className="answers-list">
        {answers.map((item, index) => (
          <li key={index} className={item.is_true ? "correct" : "incorrect"}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: 30,
              }}
            >
              {index + 1}
              {item.is_true ? (
                <FcCheckmark />
              ) : (
                <FcCancel style={{ width: 50 }} />
              )}
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h4 className="total">
          Sizning tog'ri belgilagan javoblaringiz soni {count} ta
        </h4>
      </div>
    </div>
  );
};

export default Titul;
