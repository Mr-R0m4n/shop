import {Fragment} from "react";
import {useParams} from "react-router-dom";
import Header from "../Layout/Header/Header";
import ProductDetail from "../Products/ProductDetail";
import CartBar from "../Layout/CartBar";

import css from "./Detail.module.css";
import Footer from "../Layout/Footer/Footer";

const Detail = () => {
    const params = useParams()

    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                <ProductDetail productId = {params}/>
                <CartBar/>
            </main>
            <Footer/>
        </Fragment>
    );
};

export default Detail;