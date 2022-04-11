import {Fragment} from "react";
import {useParams} from "react-router-dom";
import Header from "../Layout/Header/Header";
import ProductDetail from "../Products/ProductDetail";
import CartBar from "../Layout/CartBar";

import css from "./Detail.module.css";

const Detail = () => {
    const params = useParams()

    console.log(params)

    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                <ProductDetail/>
                <CartBar/>
            </main>
        </Fragment>
    );
};

export default Detail;