import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth-slice";
import fetchReducer from './fetch-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        fetch: fetchReducer
    }
});

export default store;