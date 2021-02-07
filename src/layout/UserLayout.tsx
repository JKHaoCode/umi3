import React from 'react';
import { IRouteComponentProps, history } from 'umi';
// import logo from '@/assects/logo.png';
import styles from './UserLayout.less';
// import { LoginType } from '@/models/login';
//
interface PropsType extends IRouteComponentProps {
  // dispatch: Dispatch;
  // login: LoginType;
  loading: boolean;
  // children: ReactNode,
}

const UserLayout: React.FC<PropsType> = props => {
  const { children } = props;

  return (
    <>
      <h1>Login</h1>
      <div>{children}</div>
      <div className={styles['copy-wthree']}>
        <p>
          Copyright &copy; {new Date().getFullYear()}.Company name All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default UserLayout;
