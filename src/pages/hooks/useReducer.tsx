import React, { useReducer } from 'react';

const initialState = {
    count: 0,
};

function reducer(
    state: { count: number },
    action: { type: string; payload: number },
) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        default:
            throw new Error();
    }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 3 })}>
                {' '}
                +{' '}
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 3 })}>
                {' '}
                -{' '}
            </button>
        </>
    );
};
