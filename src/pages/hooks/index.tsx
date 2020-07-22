import React, { useState, useEffect } from 'react';
import { history } from 'umi';
// function Child1(props: any) {
// 	// body...
// 	console.log(props)
// 	const {num, handleClick} = props

// 	return (
// 		<div
// 			onClick={() => {
// 				handleClick(num + 1)
// 			}}
// 		>
// 			child
// 		</div>
// 	)
// }

// function Child2(props: any) {
// 	const {text, handleClick} = props
// 	return (
// 	    <div>
// 	    	child2
// 	    	<Grandson text={text} handleClick={handleClick} />
// 	    </div>
// 	);
// }

// function Grandson(porps: any) {
//   console.log(porps);
//   const { text, handleClick } = porps;
//   return (
//     <div
//       onClick={() => {
//         handleClick(text + 1);
//       }}
//     >
//       grandson
//     </div>
//   );
// }

export default () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
            console.log('setTimeout');
        });
        return () => {
            clearTimeout();
            console.log('clear');
        };
    }, []);
    console.log('render');
    return (
        <div>
            {count} <br />
            <button onClick={() => setCount(count => count + 1)}>+1</button>
            <button
                onClick={() => {
                    history.push({
                        pathname: '/login',
                    });
                }}
            >
                login
            </button>
        </div>
    );
};
