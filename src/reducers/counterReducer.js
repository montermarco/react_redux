import {  ADD, SUB } from '../actions/types';

const initialState = 0;

export default (state = initialState, action) => {
    switch (action.type){
        case ADD:
            return (state += 1);
        case SUB:
            return (state -= 1);
        default:
            return state;        
    }
};