import React from 'react';
// import useToggle from '@umijs/hooks/es/useToggle';

export default () => {
  // const [state, toggle] = useToggle;

  return (
    <div>
      <p>Current Boolean: 1</p>
      <p>
        <button onClick={() => console.log(111)}>Toggle</button>
      </p>
    </div>
  );
};
