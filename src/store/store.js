import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/reducer';
import reduxPromise from 'redux-promise';

const create_store_with_middleware = applyMiddleware(reduxPromise)(createStore);
 
export default create_store_with_middleware(rootReducer);