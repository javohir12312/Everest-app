import {
  DiffOutlined,
  UserOutlined,
  PlusCircleOutlined,
  EditOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button, Modal, Input } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Admin = () => {
  const storage = window.localStorage;

  const [modal, setModal] = useState([]);

  const items = [
    getItem(<Link to={""}>ASOSIY</Link>, "1", <DiffOutlined />),
    JSON.parse(storage.getItem("fan"))
      ? getItem(
          <Link to={JSON.parse(storage.getItem("fan"))}>
            {JSON.parse(storage.getItem("fan")).toUpperCase()}
          </Link>,
          "2",
          <EditOutlined />
        )
      : "",
    getItem(<Link to={"users"}>FOYDALANUVCHILAR</Link>, "8", <TeamOutlined />),
    getItem(<Link to={"account"}>MENING HISOBIM</Link>, "9", <UserOutlined />),
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    storage.setItem("fan", JSON.stringify(modal.toLowerCase()));
    setModal([]);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModal([]);
  };

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: {},
  } = theme.useToken();

  return (
    <div>
      {localStorage.getItem("token") ? (
        <>
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              <div
                style={{
                  height: 32,
                  margin: "20px 16px 12px",
                }}
              >
                <h2 style={{ margin: 0, fontSize: 20, color: "white" }}>
                  Boshqaruv Bo'limi
                </h2>
              </div>

              <div>
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "95%",
                    marginRight: "auto",
                    marginBottom: "10px",
                    marginLeft: "auto",
                    color: "white",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  onClick={showModal}
                >
                  Qo'shish <PlusCircleOutlined />
                </Button>
                <Modal
                  title="Yangi fan qo'shish"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Input
                    placeholder="Fan nomini kiritig"
                    value={modal}
                    onChange={(evt) => setModal(evt.target.value)}
                  />
                </Modal>
              </div>

              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
              />
            </Sider>
            <Layout className="site-layout">
              <Content
                style={{
                  margin: "30px 16px 0",
                }}
              >
                <Outlet></Outlet>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
              >
                Micromania
              </Footer>
            </Layout>
          </Layout>
        </>
      ) : (
        window.location.assign("/admin")
      )}
    </div>
  );
};
export default Admin;

// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
// const items = [
//   {
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//     key: '0',
//   },
//   {
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     ),
//     key: '1',
//   },
//   {
//     type: 'divider',
//   },
//   {
//     label: '3rd menu item（disabled）',
//     key: '3',
//     disabled: true,
//   },
// ];
// const Admin = () => (
//   <Dropdown
//     menu={{
//       items,
//     }}
//   >
//     <a onClick={(e) => e.preventDefault()}>
//       <Space>
//         Hover me
//         <DownOutlined />
//       </Space>
//     </a>
//   </Dropdown>
// );
// export default Admin;
