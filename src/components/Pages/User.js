import {Fragment} from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import UserForm from "../Form/UserForm";
import css from "./Cart.module.css";

const User = () => {
    return (
        <Fragment>
            <Header/>
            <main className={css.container}>
                <UserForm/>
            </main>
            <Footer/>
        </Fragment>
    );
};

export default User;