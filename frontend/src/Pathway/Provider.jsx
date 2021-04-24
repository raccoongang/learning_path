import React, {useEffect, useState} from 'react';
// import * as data from '../mock.json';

export const PathwayContext = React.createContext();

export const PathwayProvider = ({children}) => {
    const [state, setState] = useState();

    const createPathway = (data) => {
        setState({...state, nodes: [data]});
    };

    useEffect(() => {
        setState({
            ...state,
            createPathway
        });
    }, []);

    return <PathwayContext.Provider value={state}>
        {children}
    </PathwayContext.Provider>
};
