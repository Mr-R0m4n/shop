import {createStore} from "redux";

const initialState = { isLoggedIn: localStorage.getItem('isLoggedIn')}

const loginReducer = (state = initialState, action) => {
    if (action.type === 'login') {
        localStorage.setItem('isLoggedIn' , 'true')
        return {
            isLoggedIn: localStorage.getItem('isLoggedIn')
        };
    }
    if (action.type === 'logout') {
        localStorage.removeItem('isLoggedIn')
        return {
            isLoggedIn: false
        };
    }
    return state;
};

const store = createStore(loginReducer);

export default store;