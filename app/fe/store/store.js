import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from "next-redux-wrapper";
// import rootReducer from './reducers'

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk];

export const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

//assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
