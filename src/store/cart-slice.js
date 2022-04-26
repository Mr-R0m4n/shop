import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(sessionStorage.getItem('cartItems')),
        totalAmount: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            let cartItems = []
            if(state.items){
                cartItems = state.items;
                const existingItem = state.items.find((item) => item.id === newItem.id);
                if (!existingItem) {
                    cartItems.push({
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
            } else {
                cartItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price * newItem.quantity,
                    name: newItem.title,
                    image: newItem.image,
                    sale: newItem.sale
                });
            }
            state.items = cartItems
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        },
        removeItemFromCart(state, action) {
            let cartItems = state.items.filter(item => item.id !== action.payload.id);
            state.items = cartItems
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        },
        decreaseItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        getTotalAmount(state) {
            if (state.items) {
                state.totalAmount = state.items.reduce((acc, curr) => acc + curr.totalPrice, 0);
            }
        }
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;