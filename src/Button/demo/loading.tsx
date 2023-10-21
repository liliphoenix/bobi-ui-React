import { Button, Icon, Space } from "bobi-ui";
import React from "react";
import "./loading.less";

const App: React.FC = () => (
  <Space>
    <Button>
      <Icon type="toutiao-loading1" className="default-loading" />
    </Button>
    <Button type="primary">
      <Icon type="toutiao-loading1" className="default-primary" />
    </Button>
    <Button type="warning">
      <Icon type="toutiao-loading1" className="default-loading" />
    </Button>
    <Button type="danger">
      <Icon type="toutiao-loading1" className="default-loading" />
    </Button>
  </Space>
);

export default App;
