import { createStore, combineReducers } from 'redux';

import addReducer from './addReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    add: addReducer,
    user: userReducer
})

export default createStore(rootReducer);