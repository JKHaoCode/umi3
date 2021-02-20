import React, { useEffect } from 'react';
import { IRouteComponentProps } from 'umi';

interface PropsType extends IRouteComponentProps {
  // dispatch: Dispatch;
  // login: LoginType;
  loading: boolean;
}

const layout = ({ children }: PropsType) => {
  useEffect(() => {
    // const { dispatch } = props;
    const token = localStorage.getItem('token');
    if (token) {
      // dispatch({
      //     type: 'login/userMe',
      // });
    } else {
      // history.push({
      //     pathname: '/login',
      //     query: {},
      // });
    }
    return () => {
      // ssconsole.log(2222233);
    };
  }, []);
  return (
    <>
      {/*<div>Name</div>*/}
      <div>{children}</div>
    </>
  );
};

export default layout;
