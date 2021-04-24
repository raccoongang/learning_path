import React from 'react';
import {Types} from "../constants";

const AddResourseForm = () => {
    return <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            <input
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
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state">
                {Object.keys(Types).map(
                    (type, idx) => <option key={idx} className="capitalize">{Types[type]}</option>
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

    return <div className="w-full max-w-md">
        <AddResourseForm/>
    </div>;
};

export {AddResource};
