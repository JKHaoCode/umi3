import React from 'react';
import Mock from 'mockjs';
import { useRequest } from 'ahooks';

function getUserId(): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock.mock(+1));
        }, 1000);
    });
}

function getUsername(id: number): Promise<string> {
    console.log('user id', id);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

export default () => {
    const userIdRequest = useRequest(getUserId);

    const usernameRequest = useRequest(
        () => getUsername(userIdRequest.data as number),
        {
            ready: !!userIdRequest.data,
        },
    );
    console.log(userIdRequest);
    console.log(usernameRequest);
    return (
        <div>
            <p>
                UserId:{' '}
                {userIdRequest.loading ? 'loading....' : userIdRequest.data}
            </p>
            <p>
                Username:{' '}
                {usernameRequest.loading ? 'loading....' : usernameRequest.data}
            </p>
        </div>
    );
};
