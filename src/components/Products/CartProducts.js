import {useDispatch, useSelector} from "react-redux";
import CartPageCard from "../UI/CartPageCard";

import css from "./CartProducts.module.css";
import {useEffect, useState} from 'react';
import {cartActions} from "../../store/cart-slice";
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const CartProducts = () => {
    const [modalShown, setModalShown] = useState(false);

    const cartData = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const validUserInfo = useSelector(state => state.user.valid);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartActions.getTotalAmount());
    },[cartData]);

    const checkOutHandler = () => {
        setModalShown(true)
    }

    const hideModal = () => {
        setModalShown(false)
    }

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

    let modal;
    if (!cartData || cartData.length <= 0) {
        modal = <Modal hideModal={hideModal}>
                    <p>Your shopping bag is empty</p>
                </Modal>
    }
    else if (!validUserInfo) {
        modal = <Modal hideModal={hideModal}>
            <p>Please fill out your shipping Information in your User page before checking out</p>
        </Modal>
    }
    else {
        modal = <Modal hideModal={hideModal}>
            <p>Your Products</p>
            <Button onClick={hideModal}>Order</Button>
            <Button onClick={hideModal}>Cancel</Button>
        </Modal>
    }

    return (
        <main className={css.favProducts}>
            <h3 className={css.head}>Your shopping bag</h3>
            {cartItems.length === 0 ? <p className={css.empty}>. . . is Empty</p> : cartItems}
            {totalAmount > 0 ? <h2 className={css.total}>Total amount: {totalAmount.toFixed(2)} €</h2> : <br/>}
            <Button onClick={checkOutHandler}>Check out</Button>

            {modalShown ? modal : ''}
        </main>
    );
}

export default CartProducts;