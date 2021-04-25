import {Switch, Route, Link} from "react-router-dom";
import {useState} from 'react';
import Home from './Home';
import Login from './Login';
import Modal from 'react-modal';
import {AddResourseForm} from "./Node/AddResource";

function App() {
    const [modalOpen, setModalOpen] = useState(false)

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    return (
        <div className="container">
            <header className='Header'>
              <nav>
                <Link className="py-1 px-3" to={"/"}>Home</Link>
                <Link className="py-1 px-3" to={"/login/"}>Login</Link>

                <button
                    className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleOpenModal}>
                    Add New Node
                </button>
                <Modal isOpen={modalOpen} >
                    <AddResourseForm handleCloseModal={handleCloseModal}/>
                </Modal>
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
