import {createSlice} from "@reduxjs/toolkit";

const validSlice = createSlice({
    name: 'validation',
    initialState: {
        emailIsValid: false,
        passwordIsValid: false,
        emailInputIsTouched: false,
        passwordInputIsTouched: false,
        formIsValid: false,
    },
    reducers: {
        emailValidation(state, action) {
            if (action.payload.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                state.emailIsValid = true;
                state.emailInputIsTouched = true;
            } else {
                state.emailIsValid = false;
                state.emailInputIsTouched = true;
            }
        },
        passwordValidation(state, action) {
            if (action.payload.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {
                state.passwordIsValid = true;
                state.passwordInputIsTouched = true;
            } else {
                state.passwordIsValid = false;
                state.passwordInputIsTouched = true;
            }
        },
        formValidation(state) {
            state.formIsValid = !!(state.emailIsValid && state.passwordIsValid);
            console.log(state.formIsValid);
        },
        setInputIsTouchedFalse(state) {
            state.emailInputIsTouched = false;
            state.passwordInputIsTouched = false;
        }
    }
});

export const validActions = validSlice.actions;
export default validSlice.reducer;