import { Button, Space } from "bobi-ui";
import React from "react";

const App: React.FC = () => (
  <Space>
    <Button>主按钮</Button>
    <Button type="primary">次按钮</Button>
    <Button type="warning">提示按钮</Button>
    <Button type="danger">警示按钮</Button>
    <Button type="text">文字按钮</Button>
  </Space>
);

export default App;
