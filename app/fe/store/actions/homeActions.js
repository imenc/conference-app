import axios from "axios";
import { 
    HOME_LIST_REQUEST, 
    HOME_LIST_SUCCESS, 
    HOME_LIST_FAIL 
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

