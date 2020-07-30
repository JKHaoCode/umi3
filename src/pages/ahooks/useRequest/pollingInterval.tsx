import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import { Button } from 'antd';

function getUsername(arr: number[]): Promise<string> {
    console.log(arr);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

export default () => {
    const { data, loading, run, cancel } = useRequest(getUsername, {
        pollingWhenHidden: false, // 传入 getUsername 参数可见
        pollingInterval: 1000,
        manual: true,
    });

    useEffect(() => {
        console.log(123123);
        run([1, 2]);
    }, []);

    return (
        <div>
            <p>Username: {loading ? 'loading .... ' : data}</p>
            <Button type="primary" onClick={() => run([1, 2, 3])}>
                start
            </Button>
            <Button type="default" onClick={cancel}>
                stop
            </Button>
        </div>
    );
};
