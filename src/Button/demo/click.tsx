import { Button, } from 'bobi-ui';
import React from 'react';

const App: React.FC = () => (
  <>
      <Button onClick={()=>{console.log(123);}}>触发点击事件</Button>
  </>
)

export default App 
