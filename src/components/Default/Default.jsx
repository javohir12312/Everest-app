import React from "react";
import "./Default.scss";
import Amico from "../image/amico.png";
import { Link } from "react-router-dom";

const Default = () => {
  return (
    <div className="default">
      <div className="default__cotent">
        <h2 className="default__title">Tezlikda ishlang va fikrlang</h2>
        <p className="default__text">
          Test davomida turli elektron hisoblash vositalari va shpargalkalardan foydalanish taqiqlanadi. 
        </p>
        <Link
          to={localStorage.getItem("token") ? "test" : "/login"}
          className="link">
          Testni boshlash
        </Link>
        {/* <Link to={"teacher"} className="linkTwo">
          Ustoz haqida ma'lumot
        </Link> */}
      </div>
      <img
        className="default__image"
        src={Amico}
        width={600}
        height={600}
        alt="Amico image"
      />
    </div>
  );
};

export default Default;
