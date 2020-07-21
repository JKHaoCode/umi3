import { useRequest } from '@umijs/hooks';
import Mock from 'mockjs';
import { message, Button } from 'antd';
import React from 'react';

function getUserName(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

export default () => {
    const { data, error, loading } = useRequest(getUserName);

    if (error) {
        return <div>faild to load</div>;
    }

    if (loading) {
        return <div>loading ... </div>;
    }

    return <div>Username: {data}</div>;
};
