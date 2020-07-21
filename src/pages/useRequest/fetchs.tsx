import { useRequest } from '@umijs/hooks';
import { Button, message } from 'antd';
import React from 'react';

export function deleteUser(userId: string): Promise<{ success: boolean }> {
    return new Promise(resole => {
        setTimeout(() => {
            resole({ success: true });
        }, 1000);
    });
}

export default () => {
    const {} = useRequest(deleteUser, {
        manual: true,
        fetchKey: id => id,
        onSuccess: (result, params) => {
            if (result) {
            }
        },
    });
};
