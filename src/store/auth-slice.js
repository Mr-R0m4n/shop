import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isLoggedIn: localStorage.getItem('isLoggedIn')
    },
    reducers: {
        login(state) {
            localStorage.setItem('isLoggedIn', 'true');
            state.isLoggedIn = localStorage.getItem('isLoggedIn');
        },
        logout(state) {
            localStorage.removeItem('isLoggedIn');
            state.isLoggedIn = localStorage.getItem('isLoggedIn');
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;