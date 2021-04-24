import React, {useEffect, useState} from 'react';
import axios from '../api';
// import * as data from '../mock.json';

export const PathwayContext = React.createContext();

export const PathwayProvider = ({children}) => {
    const [state, setState] = useState();

    const createNode = async (e, data) => {
        console.log(data);
        try {
            const response = await axios.post('/nodes/', {
                ...data
            });
            console.log(response)
            // if (!!response.data['access_token']) {
            //     setState({...state, redirect: true});
            // }
        } catch (error) {
            throw error;
        }

        // setState({...state, nodes: [data]});
    };

    useEffect(() => {
        setState({
            ...state,
            createNode
        });
    }, []);

    return <PathwayContext.Provider value={state}>
        {children}
    </PathwayContext.Provider>
};
