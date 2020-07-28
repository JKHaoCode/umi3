import React, { useState, useEffect, ChangeEvent, memo } from 'react';

const Child = () => {
    console.log('子组件');
    const [count, setCount] = useState(0);
    return (
        <div onClick={() => setCount(count + 1)}>我是一个子组件 {count}</div>
    );
};

const ChildMemo = memo(Child);

const Person = () => {
    const [name, setName] = useState('小米');

    // useEffect(() => {
    //   console.log('组件挂载后要做的操作');
    //   return () => {
    //     console.log('组件卸载要做的操作');
    //   };
    // }, []);
    //
    // useEffect(() => {
    //   console.log('组件更新后的操作');
    // }, [name]);

    return (
        <div>
            <p>欢迎 {name}</p>
            <input
                type="text"
                placeholder="input a username"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setName(event.target.value)
                }
            />
            <ChildMemo />
        </div>
    );
};

export default Person;
