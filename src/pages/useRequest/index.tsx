import React from 'react';
import Mock from 'mockjs';
import { useRequest } from 'ahooks';

const getUsername = (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    });
  });
};

const useRequest1 = () => {
  const { data, error, loading } = useRequest(getUsername); // 异步函数getUsername
  if (error) {
    return <div>failed to load</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return <div>Username: {data}</div>;
};

export default useRequest1;
