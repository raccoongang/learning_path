import React from 'react';
import {PathwayNode} from "../Node";
import {PathwayProvider} from "../Pathway";
import {AddResource} from "../Node/AddResource";

export const PathwayContext = React.createContext();

const Home = () => {
    return <PathwayProvider>
        <AddResource />
        {/*<PathwayNode {...nodeData} />*/}
    </PathwayProvider>;
};

export default Home;
