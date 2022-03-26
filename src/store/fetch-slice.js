import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const fetchSlice = createSlice({
    name: 'fetchApiData',
    initialState: {
        data: JSON.parse(localStorage.getItem('data')),
        isLoading: false,
        error: false,
    },
    reducers: {
        loading(state) {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        dataSuccess(state, action) {
            localStorage.setItem('data', JSON.stringify(action.payload))
            state.isLoading = false;
        }
    }
});

const { dataSuccess, loading, hasError} = fetchSlice.actions;
export const fetchShopData = () => async dispatch => {
    dispatch(loading())
    try {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => dispatch(dataSuccess(response.data)));
    } catch (e) {
        dispatch(hasError)
    }
};

export const fetchActions = fetchSlice.actions;
export default fetchSlice.reducer;