import React from "react";
import { FcCancel, FcCheckmark } from "react-icons/fc";
const Titul = () => {
  const data = JSON.parse(localStorage.getItem("answers"));

  const user = JSON.parse(localStorage.getItem("user"));

  const count = data.filter((item) => item.is_true === true).length;

  return (
    <div>
      <h5
        style={{
          color: "#2979FF",
          textAlign: "center",
          margin: "30px auto",
          padding: "0px",
        }}
      >
        Hurmatli {user.first_name} sizning tog'ri belgilagan javoblaringiz !
      </h5>
      <ul style={{ listStyle: "none", padding: 0,maxWidth:600 ,margin:"0 auto"}}>
        <li>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              margin: "0 auto",
              padding: 0,
              gap: 10,
            }}
          >
            {data.map((item, index) => {
              return (
                <li
                  style={
                    item.is_true
                      ? {
                          background: "#69F0AE",
                          height: 50,
                          width: 50,
                          border: "5px solid #2E7D32",
                          borderRadius: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "black",
                        }
                      : {
                          height: 50,
                          width: 50,
                          border: "5px solid #F50057",
                          borderRadius: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                  }
                >
                  {index + 1}
                  {item.is_true ? <FcCheckmark /> : <FcCancel />}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>

      <div>
        <h4 style={{ textAlign: "center", margin: "100px 0" }}>
          Sizning jami tog'ri javoblaringiz soni {count} ta
        </h4>
      </div>
    </div>
  );
};

export default Titul;
