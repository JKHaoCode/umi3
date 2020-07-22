import React from 'react';
import { useRequest } from '@umijs/hooks';
import { Button, Spin } from 'antd';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 3000);
    });
}

export default () => {
    const { data, loading, run, cancel } = useRequest(getUsername, {
        pollingInterval: 1000,
        pollingWhenHidden: false,
    });

    return (
        <>
            <Spin spinning={loading}>
                <p>Username: {data}</p>
            </Spin>
            <Button.Group>
                <Button type="primary" onClick={run}>
                    start
                </Button>
                <Button type="ghost" onClick={cancel}>
                    stop
                </Button>
            </Button.Group>
        </>
    );
};
