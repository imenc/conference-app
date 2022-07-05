import { combineReducers } from "redux";

import { homeListReducer, allHomesReducer } from './homeReducers';

const reducer = combineReducers({
    homeList: homeListReducer,
    allHomes: allHomesReducer
});

export default reducer;