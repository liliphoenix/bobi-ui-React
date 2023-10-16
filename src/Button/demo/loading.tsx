import { Button, Space,Icon } from 'bobi-ui';
import "./loading.less"
import React from 'react';

const App: React.FC = () => (
  <>
    <Space>
      <Button ><Icon type="toutiao-loading1" className='default-loading'></Icon></Button>
      <Button type="primary" ><Icon type="toutiao-loading1" className='default-primary'></Icon></Button>
      <Button type="warning"><Icon type="toutiao-loading1" className='default-loading'></Icon></Button>
      <Button type="danger"><Icon type="toutiao-loading1" className='default-loading'></Icon></Button>
    </Space>
  </>
);

export default App;
