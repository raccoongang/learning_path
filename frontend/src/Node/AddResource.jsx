import React from 'react';
import {Types} from "../constants";

const AddResourseForm = ({onSubmit}) => {
    return <form className="bg-white" onSubmit={onSubmit}>
        <div className="md:flex md:items-center mb-6">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                Name
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title" type="text"/>
        </div>
        <div className="md:flex md:items-center mb-6">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                Description
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description" type="text"/>
        </div>
        <div className="md:flex md:items-center mb-6">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="url">
                Url
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="url" type="text"/>
        </div>
        <div className="md:flex md:items-center mb-6">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="type">
                Type
            </label>
            <select
                className="capitalize shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
                id="grid-state">
                {Object.keys(Types).map(
                    (type, idx) => <option key={idx} className="">{Types[type]}</option>
                )}
            </select>
        </div>
        <div className="flex items-center justify-between">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Add
            </button>
        </div>
    </form>
};

const AddResource = () => {

    return <div className="max-w-sx mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5">
        <AddResourseForm onSubmit={() => {}}/>
    </div>;
};

export {AddResource};
