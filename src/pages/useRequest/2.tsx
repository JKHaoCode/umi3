import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { message } from 'antd';

// 需要手动调用 run 时才会触发执行异步函数

const changeUsername = (username: string): Promise<{ success: boolean }> => {
  console.log(username);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

const useRequest2 = () => {
  const [state, setState] = useState<string>('');

  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState('');
        message.success(`The username was changed to "${params[0]}" !`);
      }
    },
  });

  return (
    <div>
      <input
        onChange={e => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? 'loading' : 'Edit'}
      </button>
    </div>
  );
};

export default useRequest2;
