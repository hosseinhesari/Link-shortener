import * as types from './type';
const axios = require("axios");
const MAIN_URL = "http://localhost:3001";

export const get_links = () => {
    const result = axios.get(`${MAIN_URL}/links`, {
        headers: {
            "Content-type": "application/json"
        }
    });

    return {
        type: types.GET_LINKS,
        payload: result
    };
};
 
export const add_link = (data, callback) => {    
    axios.post(`${MAIN_URL}/links`, data).then(function(res) {
        callback();
    });
};

