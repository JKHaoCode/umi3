import React from 'react';
import { IRouteComponentProps, connect, Dispatch, history } from 'umi';
import logo from '@/assects/logo.png';
import styles from './UserLayout.less';

interface PropsType extends IRouteComponentProps {
    dispatch: Dispatch;
    login: LoginType;
    loading: boolean;
}

const UserLayout: React.FC<PropsType> = props => {
    const { children } = props;

    return (
        <>
            <h1>Login</h1>
            <div className="w3ls-login box">
                <img src={logo} alt="logo_img" />
                {children}
            </div>
            <div className="copy-wthree">
                <p>
                    Copyright &copy; {new Date().getYear()}.Company name All
                    rights reserved.
                </p>
            </div>
        </>
    );
};
