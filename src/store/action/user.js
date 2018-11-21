import * as types from './type';
import axios from 'axios';
const MAIN_URL = "http://localhost:3001";



export const get_user = () => {
    const x = axios.get(`${MAIN_URL}/user`, {
        headers:{
            "Content-type": "application/json"
        }
    });

    return {
        type: types.GET_USER,
        payload: x,

    };
};

export const add_user = (data, callback) => {
    
    
    axios.post(`${MAIN_URL}/user`, data).then(function (res) {
        callback();
    });
};

export const delete_user = (data, callback) => {
    
    axios.delete(`${MAIN_URL}/user/${data.id}`).then(function (res){
        callback();
    });
};

export const put_user = (data, callback) => {
    axios.put(`${MAIN_URL}/user/${data.id}`,data).then(function (res){
        callback();
    });
};



