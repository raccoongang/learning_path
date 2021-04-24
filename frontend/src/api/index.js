import axios from "axios";
import React from "react";

export default axios.create({
    baseURL: 'http://localhost:80/api/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
});
