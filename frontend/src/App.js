import {PathwayNode} from './Node';
import * as data from './mock.json';


function App() {
    const nodeData = data.default;
    return (
        <div className="container">
           <PathwayNode {...nodeData} />
        </div>
    );
}

export default App;
