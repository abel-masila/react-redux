import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

import logger  from 'redux-logger';

export default ()=>{
    return createStore(
        rootReducer, 
        applyMiddleware(logger,thunkMiddleware)
    )  
}