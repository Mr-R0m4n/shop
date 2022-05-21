import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth-slice";
import dataReducer from './data-slice';
import validReducer from './valid-slice';
import cartReducer from './cart-slice'
import favReducer from './fav-slice'
import userReducer from './user-slice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
        valid: validReducer,
        cart: cartReducer,
        fav: favReducer,
        user: userReducer
    }
});

export default store;