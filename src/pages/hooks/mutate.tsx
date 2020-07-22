import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { useRequest } from 'umi';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 2000);
    });
}

function changeUsername(username: string): Promise<{ success: boolean }> {
    console.log(username);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ success: true });
        }, 1000);
    });
}

export default () => {
    const [state, setState] = useState('');

    const { data, mutate } = useRequest(getUsername, {
        onSuccess: result => {
            console.log(result);
            setState(result);
        },
    });

    const { loading, run } = useRequest(changeUsername, {
        manual: true,
        onSuccess: (result, params) => {
            mutate(params[0]);
            message.success(`The username was changed to "${params[0]}" !`);
        },
    });

    return (
        <div>
            <p>username: {data}</p>
            <Input
                onChange={e => setState(e.target.value)}
                value={state}
                placeholder="Please enter username"
                style={{ width: 240, marginRight: 16 }}
            />
            <Button onClick={() => run(state)} loading={loading}>
                Edit
            </Button>
        </div>
    );
};
