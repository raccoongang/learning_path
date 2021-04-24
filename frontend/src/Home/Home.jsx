import React from 'react';
import {PathwayNode} from "../Node";
import {PathwayProvider} from "../Pathway";
import {AddResource} from "../Node/AddResource";

export const PathwayContext = React.createContext();

const Home = () => {
    return <PathwayProvider>
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Start creating your pathway
        </h1>
        <AddResource />
        {/*<PathwayNode {...nodeData} />*/}
    </PathwayProvider>;
};

export default Home;
