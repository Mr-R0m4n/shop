import {Fragment} from "react";
import Header from "../Layout/Header/Header";
import CartProducts from "../Products/CartProducts";
import Footer from "../Layout/Footer/Footer";

import css from "./Cart.module.css";

const Cart = () => {
    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                <CartProducts/>
            </main>
            <Footer/>
        </Fragment>
    );
};

export default Cart;