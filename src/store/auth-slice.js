import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: sessionStorage.getItem('isAuthenticated')
    },
    reducers: {
        onLogin(state) {
            sessionStorage.setItem('isAuthenticated', 'true');
            state.isAuthenticated = sessionStorage.getItem('isAuthenticated');
        },
        onLogout(state) {
            sessionStorage.removeItem('isAuthenticated');
            state.isAuthenticated = sessionStorage.getItem('isAuthenticated');
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;