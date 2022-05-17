import {useDispatch, useSelector} from "react-redux";
import CartPageCard from "../UI/CartPageCard";

import css from "./CartProducts.module.css";
import {useEffect} from "react";
import {cartActions} from "../../store/cart-slice";

const CartProducts = () => {
    const cartData = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartActions.getTotalAmount());
    },[cartData]);

    let cartItems;
    if(cartData) {
        cartItems = cartData.map(item => {
            return (
                <CartPageCard
                    id = {item.id}
                    key = {item.id}
                    sale={item.sale}
                    name = {item.name}
                    image = {item.image}
                    quantity = {item.quantity}
                    price = {item.price}
                    totalPrice = {item.totalPrice}
                />
            )
        })
    } else {
        cartItems = []
    }

    return (
        <main className={css.favProducts}>
            <h3 className={css.head}>Your shopping bag</h3>
            {cartItems.length === 0 ? <p className={css.empty}>. . . is Empty</p> : cartItems}
            {totalAmount > 0 ? <h2 className={css.total}>Total amount: {totalAmount.toFixed(2)} €</h2> : <br/>}
        </main>
    );
}

export default CartProducts;