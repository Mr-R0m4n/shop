import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import dummyData from '../DUMMY_DATA.json';

const dataSlice = createSlice({
    name: 'fetchApiData',
    initialState: {
        data: JSON.parse(sessionStorage.getItem('products')),
        filteredProducts: JSON.parse(sessionStorage.getItem('products')),
        isLoading: false,
        error: false,
    },
    reducers: {
        prepareData(state) {
            const data = dummyData.map(product => {return {...product, sale: Math.random() < 0.1}})
            state.data = data
            state.filteredProducts = data
            sessionStorage.setItem('products', JSON.stringify(data));
        },
        loading(state) {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        dataSuccess(state, action) {
            const data = action.payload.map(product => {return {...product, sale: Math.random() < 0.1}})
            state.data = data
            state.filteredProducts = data
            sessionStorage.setItem('products', JSON.stringify(data));
            state.isLoading = false;
        },
        categoryFilter(state, action) {
            if (action.payload !== 'allCategories')
                state.filteredProducts = state.data.filter(product => product.category === action.payload);
            else
                state.filteredProducts = state.data;
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
    } catch (e) {
        dispatch(hasError);
    }
};

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;