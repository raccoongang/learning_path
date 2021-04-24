import React, {useState} from 'react';
import { Redirect, Route, Switch } from "react-router";
import axios from '../api';

const Login = () => {
    const [state, setState] = useState({username: "", password: "", redirect: false});

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/auth/token/obtain/', {
                username: state.username,
                password: state.password
            });
            axios.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            if (!!response.data['access_token']) {
                setState({...state, redirect: true});
            }
        } catch (error) {
            throw error;
        }
    }

    if (state.redirect)
        return <Redirect to={'/'}/>;

    return (
        <div>
            <form className="max-w-sx mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5"
                onSubmit={handleSubmit}
            >
                <label className="flex flex-row mx-auto mb-5">
                    <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent ml-5 rounded"
                        name="username" type="text" value={state.username} placeholder="Username" onChange={handleChange} />
                </label>
                 <label className="flex flex-row mx-auto mb-5">
                    <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ml-5 rounded"
                        name="password" type="password" value={state.password} placeholder="Password" onChange={handleChange} />
                </label>
                <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                    type='submit'
                >
                    Sign in
                </button>
            </form>
        </div>
    )
};

export default Login;
