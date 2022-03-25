import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: localStorage.getItem('isAuthenticated')
    },
    reducers: {
        onLogin(state) {
            localStorage.setItem('isAuthenticated', 'true');
            state.isAuthenticated = localStorage.getItem('isAuthenticated');
        },
        onLogout(state) {
            localStorage.removeItem('isAuthenticated');
            state.isAuthenticated = localStorage.getItem('isAuthenticated');
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;