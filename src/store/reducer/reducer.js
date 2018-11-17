import * as types from "../action/type";
import { combineReducers } from "redux";

const linksReducer = (state = [], action) => {
    switch (action.type) {
        case types.GET_LINKS:
            return [...state, action.payload.data];

        default:
            return state;
    }
}



const listUser = (state = [], action) => {
    switch (action.type) {
        case types.GET_USER:
        return [...state, action.payload.data];

        default:
        return state;
    }
}

const reducers = combineReducers({
    link_list: linksReducer,
    list_user: listUser,

    
});




export default (reducers) ;