import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React from 'react';
import { Input } from 'antd';

async function getEmail(search: string): Promise<string[]> {
    console.log(search);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock.mock({ 'data|5': ['@email'] }).data);
        }, 300);
    });
}

export default () => {
    const { loading, run, data } = useRequest(getEmail, {
        throttleInterval: 1000,
        manual: true,
    });

    return (
        <div>
            <p>Enter quickly to see the effect</p>
            <Input
                placeholder="Select Emails"
                onChange={e => run(e.target.value)}
            />
            {loading ? (
                <p>loading</p>
            ) : (
                <ul style={{ marginTop: 8 }}>
                    {data?.map(i => (
                        <li key={i}>{i}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
