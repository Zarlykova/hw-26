import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authSlice } from "./auth/authSlice";
import {  basketSlice } from "./basket/basketSlice";
import { uiSlice } from "./ui/uiSlice";


const rootReducer = combineReducers({
    [basketSlice.name]:basketSlice.reducer,
    [uiSlice.name]:uiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))