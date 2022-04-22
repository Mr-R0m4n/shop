import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price * newItem.quantity,
                    name: newItem.title,
                    image: newItem.image,
                    sale: newItem.sale
                });
            } else {
                existingItem.quantity = +existingItem.quantity + +newItem.quantity;
                existingItem.totalPrice = newItem.price * existingItem.quantity;
            }
        },
        removeItemFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        // decreaseItemFromCart(state, action) {
        //     const id = action.payload;
        //     const existingItem = state.items.find((item) => item.id === id);
        //     state.totalQuantity--;
        //     state.changed = true;
        //     if (existingItem.quantity === 1) {
        //         state.items = state.items.filter((item) => item.id !== id);
        //     } else {
        //         existingItem.quantity--;
        //         existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        //     }
        // },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;