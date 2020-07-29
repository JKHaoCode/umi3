import React, { useState, memo } from 'react';
// import {} from 'ahooks'
// import {} from 'antd'

interface ChildProps {
    name: string;
    change: (v: string) => void;
}

const Child = ({ name, change }: ChildProps): JSX.Element => {
    console.log('子组件');
    return (
        <>
            <div>我是一个子组件，父级传过来的数据：{name}</div>
            <button onClick={change.bind(null, '新的子组件name')}>
                改变name
            </button>
        </>
    );
};

const ChildMemo = memo(Child);

const Page = (): JSX.Element => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Child组件');

    return (
        <>
            <button
                onClick={e => {
                    setCount(count + 1);
                }}
            >
                加1
            </button>
            <p>count:{count}</p>
            <ChildMemo
                name={name}
                change={(newName: string) => setName(newName)}
            />
        </>
    );
};

export default Page;
