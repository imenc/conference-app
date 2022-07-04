import {
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,

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
            return { loading: false, homes: action.payload }

        case HOME_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}