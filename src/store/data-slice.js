import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const dataSlice = createSlice({
    name: 'fetchApiData',
    initialState: {
        data: JSON.parse(sessionStorage.getItem('products')),
        categories: JSON.parse(sessionStorage.getItem('products')),
        isLoading: false,
        error: false,
        filteredProducts: JSON.parse(sessionStorage.getItem('products'))
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
            state.data = action.payload;
            sessionStorage.setItem('products', JSON.stringify(action.payload));
            state.isLoading = false;
        },
        categoryFilter(state, action) {
            if(action.payload !== 'allCategories')
                state.filteredProducts = state.data.filter(product => product.category === action.payload)
            else
                state.filteredProducts = state.data
        },
        ratingFilter() {

        },
        priceFilter() {

        },
        saleFilter() {

        },
    }
});

const {dataSuccess, loading, hasError} = dataSlice.actions;
export const fetchShopData = () => async dispatch => {
    dispatch(loading());
    try {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => dispatch(dataSuccess(response.data)));
        console.log('fetched')
    } catch (e) {
        dispatch(hasError);
    }
};

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;