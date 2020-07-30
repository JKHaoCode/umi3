import { useBoolean, useRequest } from 'ahooks';
import Mock from 'mockjs';
import React from 'react';
import { Button } from 'antd';

async function getArticle(): Promise<{ data: string; time: number }> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: Mock.mock('@paragraph'),
                time: new Date().getTime(),
            });
        }, 1000);
    });
}

const Artile = () => {
    const { data, loading } = useRequest(getArticle, {
        cacheKey: 'article',
    });
    if (!data || loading) {
        return <p>loading.....</p>;
    }

    return (
        <div>
            <p>Latest request time: {data?.time}</p>
            <p>{data?.data}</p>
        </div>
    );
};

export default () => {
    const [state, { toggle }] = useBoolean(false);
};
