import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { studentReducer } from "./Reducers";

function logger({ getState }) {
    return next => action => {
        console.log('action', action)
        console.log('state when action is dispatched', getState());
        const returnVal = next(action);
        return returnVal;
    }
}

const rootReducers = combineReducers({
    students: studentReducer
})

export const store = () => createStore(rootReducers, applyMiddleware(thunk))