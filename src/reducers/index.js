import { combineReducers } from 'redux';
import Firebase from './firebase';

const rootReducer = combineReducers({
    firebase: Firebase
});

export default rootReducer;