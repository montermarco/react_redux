import { GET_ALL_CHARACTERS } from './types';

export const getCharacters = () => async dispatch => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const results = await response.json();
    console.log(results);
    dispatch({type: GET_ALL_CHARACTERS, payload: results });
};