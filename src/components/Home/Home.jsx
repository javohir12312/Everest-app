import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import "../Home/Default.scss";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Header style={{ height: "auto", paddingTop: 20, paddingBottom: 20 }}>
        <Menu theme="dark" mode="horizontal">
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
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                to={""}
              >
                Blocktest
              </Link>
            </div>
            <ul style={{ display: "flex", alignItems: "center", gap: 40 }}>
              <li>
                <Link
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                  to={localStorage.getItem("token") ? "default" : "/login"}
                >
                  Testga kirish
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                  to={"about"}
                >
                  Biz haqimizda
                </Link>
              </li>
            </ul>
            <ul style={{ display: "flex", alignItems: "center", gap: 40 }}>
              <li>
                <Link
                  style={{
                    height: "auto",
                    color: "black",
                    backgroundColor: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    border: "2px solid",
                    borderRadius: 100,
                    textAlign: "center",
                    width: 180,
                    display: "block",
                  }}
                  to={"/register"}
                >
                  Ro'yxatdan otish
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    height: "auto",
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    border: "2px solid",
                    borderRadius: 100,
                    textAlign: "center",
                    width: 170,
                    display: "block",
                  }}
                  to={"/login"}
                >
                  Tizimga kirish
                </Link>
              </li>
            </ul>
          </div>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            marginTop: 45,
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <Outlet></Outlet>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Micromania
      </Footer>
    </Layout>
  );
};

export default Home;
