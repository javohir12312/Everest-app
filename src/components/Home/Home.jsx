import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import "../Home/Default.scss";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <header style={{ height: "auto", paddingTop: 20, paddingBottom: 20 }}>
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
      </main>
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
