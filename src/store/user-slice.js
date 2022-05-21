import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(sessionStorage.getItem('userInfo')),
    },
    reducers: {
        setUserInformation(state, action) {
            state.user = action.payload;
            sessionStorage.setItem('userInfo', JSON.stringify(action.payload));
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;