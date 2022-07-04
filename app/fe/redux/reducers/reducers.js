import { combineReducers } from "redux";
import { homeListReducer } from './homeReducers';

const reducer = combineReducers({
    homeList: homeListReducer
});

export default reducer;