import axios from "axios";
import {
    ALL_HOMES_REQUEST,  
    ALL_HOMES_SUCCESS, 
    ALL_HOMES_FAIL,    
    
    HOME_LIST_REQUEST, 
    HOME_LIST_SUCCESS, 
    HOME_LIST_FAIL,

    CLEAR_ERRORS
} from "../constants/homeConstants";

export const listHomes = () => async (dispatch) => {
    try {
        dispatch({ type: HOME_LIST_REQUEST });
        const { data } = await axios.get('/api/blog/articles');

        dispatch({
            type: HOME_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: HOME_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getAllHomes = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_HOMES_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/api/blog/articles/`);
        // const { data } = await axios.get(`/api/blog/articles/`);

        dispatch({
            type: ALL_HOMES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_HOMES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

