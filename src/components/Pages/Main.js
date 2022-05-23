import {Fragment} from 'react';
import Header from "../Layout/Header/Header";
import CategoryBar from "../Layout/CategoryBar/CategoryBar";
import Products from "../Products/Products";
import CartBar from "../Layout/CartBar";
import Footer from "../Layout/Footer/Footer";

import css from './Main.module.css'

const Main = () => {

    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                <CategoryBar/>
                <Products/>
                <CartBar/>
            </main>
            <Footer/>
        </Fragment>
    );
};

export default Main;