import { Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import "./Home.scss";

const Home = () => {
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
              <Link
                className="logo"
                // style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                to={""}
              >
                Blocktest
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
          </div>
        </Menu>
      </header>
      <main>
          <Outlet></Outlet>
      </main>
      <footer>
        Micromania
      </footer>
    </>
  );
};

export default Home;
