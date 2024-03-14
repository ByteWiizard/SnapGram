import { combineReducers } from "@reduxjs/toolkit";
import userDetailReducer from "./SignInUser";


const rootReducer  = combineReducers({
    userDetails: userDetailReducer,
})

export default rootReducer;