import { GET_ALL_CHARACTERS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_CHARACTERS:
            return [...state, ...action.payload.results];
        default:    
            return state;    
    }
};

