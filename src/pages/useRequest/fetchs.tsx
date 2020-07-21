import { useRequest } from '@umijs/hooks';
import { Button, message, Input } from 'antd';
import React, { useState, ChangeEvent } from 'react';

export function deleteUser(userId: string): Promise<{ success: boolean }> {
    return new Promise(resole => {
        setTimeout(() => {
            resole({ success: true });
        }, 1000);
    });
}

export default () => {
    const [state, setState] = useState('');
    const { loading, run } = useRequest(deleteUser, {
        manual: true,
        fetchKey: id => id,
        onSuccess: (result, params) => {
            if (result) {
                message.success(`The username was changed to "${params[0]}" !`);
                console.log(result, params);
                setState('');
            }
        },
    });

    return (
        <div>
            <Input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                }
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
