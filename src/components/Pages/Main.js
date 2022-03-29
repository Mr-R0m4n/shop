import {Fragment, useEffect} from "react";
import {fetchShopData} from "../../store/fetch-slice";
import {useDispatch} from "react-redux";
import Header from "../Layout/Header";
import CategoryBar from "../Layout/CategoryBar";
import Products from "../Products/Products";
import CartBar from "../Layout/CartBar";

import css from './Main.module.css'

const Main = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchShopData());
    },[])

    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                <CategoryBar/>
                <Products/>
                <CartBar/>
            </main>
        </Fragment>
    );
};

export default Main;