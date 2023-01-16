import * as actionTypes from './actiontypes';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/products/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        dispatch({type:actionTypes.ADD_TO_CART_ERROR,payload:error.message})
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};