import {createSlice} from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'fav',
    initialState: {
        favItems: [],
    },
    reducers: {
        toggleFavItem(state, action) {
            const newItem = action.payload;
            let favItems = state.favItems;
            const existingItem = state.favItems.find((item) => item.id === newItem);
            if (!existingItem) {
                favItems.push({
                    id: newItem
                });
            }
            else {
                favItems = favItems.filter( item => item.id !== newItem)
            }
            state.favItems = favItems;
        }
    }
});

export const favActions = favSlice.actions;
export default favSlice.reducer;