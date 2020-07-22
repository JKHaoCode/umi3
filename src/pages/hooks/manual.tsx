import { useRequest } from '@umijs/hooks';
import { Button, Input, message } from 'antd';
import React, { useState } from 'react';
import request from '@/utils/request';

interface Response {
    message: string;
    success: boolean;
    data: {
        name: string;
    };
}

function changeUsername(username: string): Promise<Response> {
    console.log(username);

    return request('/name');
}

export default () => {
    const [state, setState] = useState('');
    const { loading, run } = useRequest(changeUsername, {
        manual: true,
        onSuccess: (result: Response, params: [string]) => {
            console.log(result, params);
            if (result.success) {
                setState('');
                message.success(
                    `The username was changed to "${params[0]} is ${result.data.name}" !`,
                );
            }
        },
        onError: e => {
            console.log(e);
        },
    });

    return (
        <div>
            <Input
                onChange={e => setState(e.target.value)}
                value={state}
                placeholder="Please enter username"
                style={{ width: 240, marginRight: 45 }}
            />

            <Button type="primary" onClick={() => run(state)} loading={loading}>
                Edit
            </Button>
        </div>
    );
};
