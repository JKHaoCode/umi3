import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { LoginType } from '@/models/login';

interface PropsType {
  dispatch: Dispatch;
  login: LoginType;
  loading: boolean;
}

const Home: React.FC<PropsType> = props => {
  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'login/userMe',
    });
    return () => {
      console.log(2222233);
    };
  }, []);

  return <div>{props.login.username && props.login.username.name}</div>;
};

export default connect(({ login }: { login: LoginType }) => ({ login }))(Home);
