import {Fragment} from "react";
import Header from "../Layout/Header";
import CategoryBar from "../Layout/CategoryBar";
import Products from "../Products/Products";
import CartBar from "../Layout/CartBar";

const Main = () => {
    return (
        <Fragment>
            <Header/>
            <CategoryBar/>
            <Products/>
            <CartBar/>
        </Fragment>
    );
};

export default Main;