import {PathwayNode} from './Node';
import {Switch, Route, Link} from "react-router-dom";
import * as data from './mock.json';
import Login from "./Login";


function App() {
    const nodeData = data.default;
    return (
        <div className="container">
            <nav className="mb-3">
                <Link className="py-1 px-3" to={"/"}>Home</Link>
                <Link className="py-1 px-3" to={"/login/"}>Login</Link>
            </nav>
            <main>
                <Switch>
                    <Route exact path={"/login/"} component={Login}/>
                    <Route path={"/"} render={() => <PathwayNode {...nodeData} />}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
