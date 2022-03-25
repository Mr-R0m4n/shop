import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth-slice";
import fetchReducer from './fetch-slice';
import validReducer from './valid-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        fetch: fetchReducer,
        valid: validReducer
    }
});

export default store;