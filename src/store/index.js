import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth-slice";
import fetchReducer from './fetch-slice';
import verifyReducer from './verify-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        fetch: fetchReducer,
        verify: verifyReducer
    }
});

export default store;