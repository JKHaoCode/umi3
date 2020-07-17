import React, { useEffect } from 'react';
import { IRouteComponentProps, connect, Dispatch, history } from 'umi';
import { LoginType } from '@/models/login';

interface PropsType extends IRouteComponentProps {
    dispatch: Dispatch;
    login: LoginType;
    loading: boolean;
}

const layout = ({
    children,
    location,
    route,
    match,
    dispatch,
    login,
}: PropsType) => {
    useEffect(() => {
        // const { dispatch } = props;
        const token = localStorage.getItem('token');
        if (token) {
            dispatch({
                type: 'login/userMe',
            });
        } else {
            history.push({
                pathname: '/login',
                query: {},
            });
        }
        return () => {
            console.log(2222233);
        };
    }, []);
    return (
        <>
            <div>{login.username && login.username.name}</div>
            <div>{children}</div>
        </>
    );
};

export default connect(({ login }: { login: LoginType }) => ({ login }))(
    layout,
);
