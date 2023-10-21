import { Button, Space } from "bobi-ui";
import React from "react";

const App: React.FC = () => (
  <Space>
    <Button disabled>主按钮</Button>
    <Button type="primary" disabled>
      次按钮
    </Button>
    <Button type="text" disabled>
      文字按钮
    </Button>
  </Space>
);

export default App;
