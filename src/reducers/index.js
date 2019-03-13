import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import characterReducer from './characterReducer';

export default combineReducers({
    counter: counterReducer,
    characters: characterReducer
});
