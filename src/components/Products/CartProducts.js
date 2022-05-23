import {useDispatch, useSelector} from "react-redux";
import CartPageCard from "../UI/CartPageCard";

import css from "./CartProducts.module.css";
import {useEffect, useState} from 'react';
import {cartActions} from "../../store/cart-slice";
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import ModalCard from '../UI/ModalCard';

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

    const placeOrder = () => {
        dispatch(cartActions.removeAllItems());
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

    let modalItems;
    if(cartData) {
        modalItems = cartData.map(item => {
            return (
                <ModalCard
                    id = {item.id}
                    key = {item.id}
                    name = {item.name}
                    quantity = {item.quantity}
                    price = {item.price}
                    totalPrice = {item.totalPrice}
                />
            )
        })
    }

    let modal;
    if (!cartData || cartData.length <= 0) {
        modal = <Modal hideModal={hideModal}>
                    <p>Your shopping bag is empty</p>
                    <Button onClick={hideModal}>Close</Button>
                </Modal>
    }
    else if (!validUserInfo) {
        modal = <Modal hideModal={hideModal}>
                    <p>Please fill out shipping Information in User page before checking out</p>
                    <Button onClick={hideModal}>Close</Button>
                </Modal>
    }
    else {
        modal = <Modal hideModal={hideModal}>
            <h2>Order summary</h2>
            {modalItems}
            {totalAmount > 0 ? <h2 className={css.total}>Total amount: {totalAmount.toFixed(2)} €</h2> : <br/>}
            <div>
                <Button onClick={placeOrder}>Order</Button>
                <Button onClick={hideModal}>Cancel</Button>
            </div>
        </Modal>
    }

    return (
        <main className={css.favProducts}>
            <h3 className={css.head}>Your shopping bag</h3>
            {cartItems.length === 0 ? <p className={css.empty}>. . . is Empty</p> : cartItems}
            {totalAmount > 0 ? <h2 className={css.total}>Total amount: {totalAmount.toFixed(2)} €</h2> : <br/>}
            <Button className={css.checkOut} onClick={checkOutHandler}>Check out</Button>
            {modalShown ? modal : ''}
        </main>
    );
}

export default CartProducts;