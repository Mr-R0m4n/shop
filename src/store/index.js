import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth-slice";
import dataReducer from './data-slice';
import validReducer from './valid-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
        valid: validReducer,
    }
});

export default store;