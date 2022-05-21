import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(sessionStorage.getItem('userInfo')),
        valid: false
    },
    reducers: {
        setUserInformation(state, action) {
            state.user = action.payload;
            if (action.payload.every(item => item.length > 0)){
                state.valid = true;
            }
            else {
                state.valid = false;
            }
            console.log(state.valid)
            sessionStorage.setItem('userInfo', JSON.stringify(action.payload));
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;