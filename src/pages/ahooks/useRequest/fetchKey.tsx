import React from 'react';
import { message, Button } from 'antd';
import { useRequest } from 'ahooks';

function deleteUser(userId: string): Promise<{ success: boolean }> {
    console.log(typeof userId);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ success: true });
        }, 3000);
    });
}

export default () => {
    const { run, fetches } = useRequest(deleteUser, {
        manual: true,
        fetchKey: id => id,
        onSuccess: (reuslt, params) => {
            console.log(params);
            if (reuslt.success) {
                message.success(`Disabled user ${params[0]}`);
            }
        },
    });

    const users = [
        {
            id: '1',
            username: 'A',
        },
        {
            id: '2',
            username: 'B',
        },
        {
            id: '3',
            username: 'C',
        },
        {
            id: '4',
            username: 'D',
        },
    ];

    return (
        <div>
            <div>
                You can click all buttons, each request has its own status.
            </div>
            <ul>
                {users.map(item => (
                    <li key={item.id} style={{ marginTop: 8 }}>
                        <Button type="primary" onClick={() => run(item.id)}>
                            {fetches[item.id]?.loading
                                ? 'loading'
                                : `delete ${item.username}`}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
