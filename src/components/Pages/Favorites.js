import {Fragment} from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import CartBar from "../Layout/CartBar";

import css from './Favorites.module.css'
import FavProducts from "../Products/FavProducts";

const Favorites = () => {

    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                <FavProducts/>
                <CartBar/>
            </main>
            <Footer/>
        </Fragment>
    );
};

export default Favorites;