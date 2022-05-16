import {createSlice} from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'fav',
    initialState: {
        favItems: JSON.parse(sessionStorage.getItem('favItems')),
    },
    reducers: {
        toggleFavItem(state, action) {
            const newItem = action.payload;
            let favItems = state.favItems;
            if(favItems){
                const existingItem = state.favItems.find((item) => item.id === newItem);
                if (!existingItem) {
                    favItems.push({
                        id: newItem
                    });
                } else {
                    favItems = favItems.filter(item => item.id !== newItem)
                }
            }
            else {
                favItems = [];
                favItems.push({
                    id: newItem
                });
            }
            state.favItems = favItems;
            sessionStorage.setItem('favItems', JSON.stringify(favItems));
        }
    }
});

export const favActions = favSlice.actions;
export default favSlice.reducer;