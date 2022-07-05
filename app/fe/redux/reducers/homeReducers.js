import {
    ALL_HOMES_REQUEST,
    ALL_HOMES_SUCCESS,
    ALL_HOMES_FAIL,

    HOME_LIST_REQUEST,
    HOME_LIST_SUCCESS,
    HOME_LIST_FAIL,

    CLEAR_ERRORS
} from '../constants/homeConstants'


export const homeListReducer = (state = { homes: [] }, action) => {
    switch (action.type) {
        case HOME_LIST_REQUEST:
            return { loading: true, homes: [] };

        case HOME_LIST_SUCCESS:
            return { loading: false, homes: action.payload };

        case HOME_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state

    }
}

// All home articles reducer
export const allHomesReducer = (state = { homes: [] }, action) => {
    switch (action.type){
        case ALL_HOMES_REQUEST:
            return { loading: true, homes: []};

        case ALL_HOMES_SUCCESS:
            return {  
                loading: false,              
                homes: action.payload
            };

        case ALL_HOMES_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default: 
            return state
    }
}