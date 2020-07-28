import React, { createContext } from 'react';

const AppContext = createContext({});

export default (props: any) => {
    return (
        <AppContext.Provider value={props.values}>
            {props.children}
        </AppContext.Provider>
    );
};
