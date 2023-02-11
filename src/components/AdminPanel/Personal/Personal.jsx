import { Upload, Input, Button, Space } from "antd";
import ImgCrop from "antd-img-crop";
import { useState } from "react";
import { UserOutlined, GoogleOutlined } from "@ant-design/icons";

const Personal = () => {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  return (
    <>
      <h2 style={{ marginTop: 0 }}>Shaxsiy ma'lumotlar</h2>

      <div style={{ marginBottom: 15 }}>
        <ImgCrop rotate>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            
            beforeUpload={(file) => {
              return false
            }}
          >
            {fileList.length < 1 && "+ Rasm qo'shish"}
          </Upload>
        </ImgCrop>
      </div>

      <div style={{ display: "flex", gap: "20px", marginBottom: 15 }}>
        <Input
          showCount
          maxLength={15}
          minLength={5}
          size="large"
          placeholder="Foydalanuvchi nomingizni kiriting"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          prefix={<UserOutlined />}
        />
        <Input
          size="large"
          type="email"
          placeholder="Foydalanuvchi email pochta manzilingizni kiriting"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          prefix={<GoogleOutlined />}
        />
      </div>

      <Space direction="horizontal">
        <Button size="large" onClick={() => (setUsername(), setEmail())}>
          Bekor qilish
        </Button>
        <Button
          size="large"
          type={"primary"}
          onClick={() => (setUsername(), setEmail())}
        >
          Tasdiqlash
        </Button>
      </Space>
    </>
  );
};
export default Personal;
