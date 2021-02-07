import React, { useEffect } from 'react';

interface PropsType {
  loading: boolean;
}

const Home: React.FC<PropsType> = props => {
  useEffect(() => {
    // const { dispatch } = props;
    // dispatch({
    //   type: 'login/userMe',
    // });
    return () => {
      console.log(2222233);
    };
  }, []);

  return <div>Name</div>;
};

export default Home;
