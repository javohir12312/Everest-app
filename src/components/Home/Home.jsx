import { Button, Menu } from "antd";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [ad, setAd] = useState("");
  const navigate = useNavigate();
  function Ham() {
    const hamburger = document.querySelector(".ham");

    if (hamburger.style.top == "-100%") {
      hamburger.style.top = "0";
    } else {
      hamburger.style.top = "-100%";
    }
  }

  function Render() {
    localStorage.clear();
    setAd("a");
    navigate("/");
  }

  return (
    <>
      <header style={{ height: "auto", paddingTop: 20, paddingBottom: 20 }}>
        <Menu theme="transparent" mode="horizontal">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Link className="logo" to={""}>
                <img
                  style={{ background: "white", borderRadius: "100%" }}
                  src={"../assets/images/logo.png"}
                  alt=""
                  width={100}
                />
              </Link>
            </div>
            <div className="box123">
              {/* <Link style={{ color: "white" }} to={"teacher"}>
                Ustoz haqida
              </Link> */}
              <Link style={{ color: "white", fontSize: "20px" }} to={"about"}>
                Biz haqimizda !
              </Link>
            </div>
            <ul className="box123">
              <li>
                <Link
                  className="testButton"
                  to={localStorage.getItem("token") ? "test" : "/login"}
                >
                  Testga kirish
                </Link>
              </li>
              {localStorage.getItem("user") ? (
                <li>
                  <Button onClick={Render}>chiqish</Button>
                </li>
              ) : null}
            </ul>

            <div onClick={Ham} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="ham">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {/* <Link
                  style={{ color: "white", width: "100%", textAlign: "center" }}
                  to={"teacher"}
                >
                  Ustoz haqida
                </Link> */}
                <Link
                  style={{ color: "white", width: "100%", textAlign: "center" }}
                  to={"about"}
                >
                  Biz haqimizda
                </Link>
              </div>
              <ul style={{ display: "flex", alignItems: "center", gap: 40 }}>
                <li>
                  <Link
                    className="testButton"
                    to={localStorage.getItem("token") ? "test" : "/login"}
                  >
                    Testga kirish
                  </Link>
                </li>
              </ul>
              {localStorage.getItem("user") ? (
                <li>
                  <Button
                    style={{ margin: "10px auto", display: "block" }}
                    onClick={Render}
                  >
                    chiqish
                  </Button>
                </li>
              ) : null}
            </div>
          </div>
        </Menu>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        Powered by{" "}
        <a style={{ color: "white" }} href="https://t.me/micromania_team">
          Micromania
        </a>
      </footer>
    </>
  );
};

export default Home;
