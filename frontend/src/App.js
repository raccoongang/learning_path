import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
    return (
        <div className="container">
            <header className='Header'>
              <nav>
                <Link className="py-1 px-3" to={"/"}>Home</Link>
                <Link className="py-1 px-3" to={"/login/"}>Login</Link>
              </nav>
            </header>
            <main>
                <Switch>
                    <Route exact path={"/login/"} component={Login}/>
                    <Route exact path={"/"} component={Home}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
