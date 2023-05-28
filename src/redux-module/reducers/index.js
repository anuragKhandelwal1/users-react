import { combineReducers } from 'redux';
import { UserReducer } from './user-reducer';

const rootReducer = combineReducers({
    allUsers: UserReducer,  
})

export default rootReducer;