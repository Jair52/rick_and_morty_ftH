import axios from "axios";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

// export function addFav(character){
//     return {
//         type: ADD_FAV,
//         payload: character
//     }
// }
// //*EXPRESS UNION BACK FRONT
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character)
//         .then(({ data }) => {
//             return dispatch({
//                 type: 'ADD_FAV',
//                 payload: data,
//             });
//         }
//        );
//     };
//  };
//*ASYNC AWAIT
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        } catch (error) {
            alert(error.message);
            /* 
            return dispatch({
                type: ERROR,
                payload: error.message,
            });
            */
        }
    };
 };



// export function removeFav(id){
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }
//*EXPRESS
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

export function filterCards(gender){
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(order){
    return {
        type: ORDER,
        payload: order
    }
}