import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import dummyData from '../DUMMY_DATA.json';

const dataSlice = createSlice({
    name: 'fetchApiData',
    initialState: {
        data: JSON.parse(sessionStorage.getItem('products')),
        filteredProducts: JSON.parse(sessionStorage.getItem('filtered')),
        isLoading: false,
        error: false,
        categoryFilter: '',
        ratingFilter: 0,
        priceFilter: [0, 100000],
        saleFilter: 'false'
    },
    reducers: {
        prepareData(state) {
            const data = dummyData.map(product => {
                return {...product, sale: Math.random() < 0.1, fav: false};
            });

            for(let product of data){
                if(product.sale) {
                    product.price = product.price * 0.8
                }
            }
            state.data = data;
            state.filteredProducts = data;
            sessionStorage.setItem('products', JSON.stringify(data));
            sessionStorage.setItem('filtered', JSON.stringify(data));
        },
        // loading(state) {
        //     state.isLoading = true;
        // },
        // hasError(state, action) {
        //     state.error = action.payload;
        //     state.isLoading = false;
        // },
        // dataSuccess(state, action) {
        //     const data = action.payload.map(product => {
        //         return {...product, sale: Math.random() < 0.1};
        //     });
        //     state.data = data;
        //     state.filteredProducts = data;
        //     sessionStorage.setItem('products', JSON.stringify(data));
        //     sessionStorage.setItem('filtered', JSON.stringify(data));
        //     state.isLoading = false;
        // },
        filter(state) {
            if (state.saleFilter === 'false')
                state.filteredProducts = state.data.filter(product =>
                    product.category.includes(state.categoryFilter) &&
                    product.rating.rate > state.ratingFilter &&
                    product.price > state.priceFilter[0] && product.price < state.priceFilter[1]);
            else
                state.filteredProducts = state.data.filter(product =>
                    product.category.includes(state.categoryFilter) &&
                    product.rating.rate > state.ratingFilter &&
                    product.price > state.priceFilter[0] && product.price < state.priceFilter[1] &&
                    String(product.sale) === state.saleFilter);
        },
        categoryFilter(state, action) {
            state.categoryFilter = action.payload;
        },
        ratingFilter(state, action) {
            state.ratingFilter = action.payload;
        },
        priceFilter(state, action) {
            const [low, high] = action.payload.split(',');
            state.priceFilter = [+low, +high];
        },
        saleFilter(state, action) {
            state.saleFilter = action.payload;
        },
    }
});

// const {dataSuccess, loading, hasError} = dataSlice.actions;
// export const fetchShopData = () => async dispatch => {
//     dispatch(loading());
//     try {
//         axios.get('https://fakestoreapi.com/products')
//             .then((response) => dispatch(dataSuccess(response.data)));
//     } catch (e) {
//         dispatch(hasError);
//     }
// };

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;