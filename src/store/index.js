//redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
//reducers
import postsReducer from './reducers/postsReducer'
import usersReducer from './reducers/usersReducer'


const reducer = combineReducers({postsReducer, usersReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
