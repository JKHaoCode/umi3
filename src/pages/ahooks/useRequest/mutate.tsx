import React, { ChangeEvent, useState } from 'react';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import { Input, Button } from 'antd';

function getUsername(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

export default () => {
    const [state, setState] = useState('');
    const { data, mutate } = useRequest(getUsername, {
        // manual: true,
        onSuccess: (result, params) => {
            console.log(params);
            setState(result);
        },
    });

    function clickMutate(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        event.preventDefault();
        console.log(event);

        mutate(state);
    }

    return (
        <div>
            <p>username: {data}</p>
            <Input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                }
                value={state}
                placeholder="Please enter username"
                style={{ width: 240, marginRight: 16 }}
            />
            <Button type="primary" onClick={clickMutate}>
                Edit
            </Button>
        </div>
    );
};
