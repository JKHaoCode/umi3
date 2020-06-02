import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './index.less';
import TodoList from './TodoList';

export default () => {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <div>
      {count}
      <Button type="primary" onClick={() => setCount(count + 1)}>点击</Button>
      <TodoList></TodoList>
    </div>
  );
}
