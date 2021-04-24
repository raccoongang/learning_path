import React, {useState} from "react";
import Modal from 'react-modal';
import {PathwayNode} from "../Node";

import * as data from '../mock.json';
import {AddResourseForm} from "../Node/AddResource";

const CreatePath = ({history}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tab, setTab] = useState(1);

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    return <div>
        <div className="bg-white">
            <nav className="flex flex-col sm:flex-row">
                <button onClick={() => setTab(1)}
                    className={"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" + (tab === 1 ? 'text-blue-500 font-medium border-b-2 border-blue-500' : '')}>
                    Learning paths
                </button>
                <button onClick={() => setTab(2)}
                    className={"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" + (tab === 2 ? 'text-blue-500 font-medium border-b-2 border-blue-500' : '')}>
                    My nodes
                </button>
            </nav>
        </div>

        {tab === 1 && <div>
            <PathwayNode {...data.default}/>
        </div>}
        {tab === 2 && <div>
            <button
                className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleOpenModal}>
                Add New Node
            </button>
            <Modal isOpen={modalOpen} >
                <AddResourseForm handleCloseModal={handleCloseModal}/>
            </Modal>
        </div>}
    </div>;
};

export { CreatePath };
