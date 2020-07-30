import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import { Input } from 'antd';
import React from 'react';

async function getEmail(search: string): Promise<{ data: string[] }> {
    console.log(search);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock.mock({ 'data|5': ['@email'] }));
        }, 500);
    });
}

export default () => {
    const { data, loading, run } = useRequest(getEmail, {
        debounceInterval: 500,
        manual: true,
    });
    // console.log(data)
    return (
        <div>
            <p>Enter quickly to see the effect</p>
            <Input
                placeholder="Select Email"
                onChange={e => run(e.target.value)}
            />
            {loading ? (
                <p>loading....</p>
            ) : (
                <ul style={{ marginTop: 8 }}>
                    {(data ? data.data : []).map(i => (
                        <li key={i}>{i}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
