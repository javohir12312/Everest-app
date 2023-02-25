import React from "react";

const Titul = () => {
  const data = JSON.parse(localStorage.getItem("answers"));
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <ul style={{ listStyle: "none" }}>
            {data.map((item) => {
              return <li style={item.is_true ? {background:'red'} : {background:'black'}}>{item.test_id}</li>;
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Titul;
