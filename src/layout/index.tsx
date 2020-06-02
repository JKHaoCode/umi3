import React from 'react';
import { IRouteComponentProps } from 'umi';

// interface propsType {
//   children: ReactElement
// }

// const layout = (props: propsType) => {

//   return (
//     <div>
//       {props.children}
//     </div>
//   );
// };

// export default layout;

const layout = ({ children, location, route, history, match }: IRouteComponentProps) => <div>{children}</div>

export default layout;