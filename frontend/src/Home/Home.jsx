import React from 'react';
import {PathwayNode} from "../Node";
import {PathwayProvider} from "../Pathway";
import {AddResourseForm} from "../Node/AddResource";

export const PathwayContext = React.createContext();

const Home = () => {
    return <PathwayProvider>
        <h2 className="text-2xl m-5">Learning path 1</h2>
        <h2 className="text-2xl m-5">Learning path 2</h2>
        <h2 className="text-2xl m-5">...</h2>
        <h2 className="text-2xl m-5">Learning path N</h2>
    </PathwayProvider>;
};

export default Home;
