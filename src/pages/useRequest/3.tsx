import React from 'react';
import Mock from 'mockjs';
import { useRequest } from 'ahooks';

const getUsername = (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
};

export default () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
  });

  return (
    <>
      <p>Username: {loading ? 'loading' : data}</p>
      <button type="button" onClick={run}>
        start
      </button>
      <button type="button" onClick={cancel} style={{ marginLeft: 8 }}>
        stop
      </button>
    </>
  );
};
