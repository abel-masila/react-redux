import todos from './todos.reducers';
import users from  './users.reducers';

//import combineReducers from redux
import { combineReducers } from 'redux';

const rootReducer=combineReducers({
    todos,
    users
});

export default rootReducer;