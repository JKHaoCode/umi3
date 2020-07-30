import { useRequest } from 'ahooks';
import { message, Input, Button, InputNumber } from 'antd';
import React, { ChangeEvent, useState } from 'react';

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
    const [count, setCount] = useState(0);
    const { loading, run } = useRequest(changeUsername, {
        manual: true,
        onSuccess: (result, params) => {
            console.log(params);
            if (result.success) {
                setState('');
                message.success(`The username was changed to "${params[0]}" !`);
            }
        },
    });

    return (
        <div>
            <Input
                placeholder="Please enter username"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                }
                value={state}
                style={{ width: 240, marginRight: 16 }}
            />
            <InputNumber
                placeholder="Please enter username"
                onChange={(e: number | string | undefined) =>
                    setCount(e as number)
                }
                value={count}
                style={{ width: 240, marginRight: 16 }}
            />
            <Button
                type="primary"
                disabled={loading}
                onClick={() => run([state, counts])}
            >
                {loading ? 'loading' : 'Edit'}
            </Button>
        </div>
    );
};
