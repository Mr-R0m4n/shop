import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import {Fragment} from "react";
import Products from "../Products/Products";

const Main = () => {
    return (
        <Fragment>
            <Header/>
            <Sidebar/>
            <Products/>
        </Fragment>
    );
};

export default Main;