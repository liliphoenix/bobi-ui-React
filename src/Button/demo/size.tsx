import { Button, Space } from "bobi-ui";
import React from "react";

const App: React.FC = () => (
  <Space>
    <Button size="small">小尺寸</Button>
    <Button>中尺寸</Button>
    <Button size="large">大尺寸</Button>
  </Space>
);
export default App;
