import React, { useEffect } from 'react';
import { IRouteComponentProps, connect, Dispatch } from 'umi';
import { LoginType } from '@/models/login';

interface PropsType {
  dispatch: Dispatch;
  login: LoginType;
  loading: boolean;
}

const layout = ({
  children,
  location,
  route,
  history,
  match,
  dispatch,
  login,
}: IRouteComponentProps) => {
  useEffect(() => {
    // const { dispatch } = props;
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({
        type: 'login/userMe',
      });
    }
    return () => {
      console.log(2222233);
    };
  }, []);
  return (
    <>
      <div>{login.username && login.username.name}</div>;<div>{children}</div>
    </>
  );
};

export default connect(({ login }: { login: LoginType }) => ({ login }))(
  layout,
);
