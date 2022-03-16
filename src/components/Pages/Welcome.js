import {Fragment} from "react";
import Header from "../Layout/Header";
import shopping from '../../assets/shoppingbag.svg'
import humming from '../../assets/humming.svg'

import css from './Welcome.module.css'

const Welcome = () => {
    return (
        <Fragment>
            <Header/>
            <img src={humming} alt={'humming bird'}/>
            <img src={shopping} alt={'shopping bag'}/>
            <h2>Shopyfly</h2>
            <form>
                <label>E-mail:</label>
                <input type={'email'}/>
                <label>Password:</label>
                <input type={'password'}/>
            </form>
        </Fragment>
    );
};

export default Welcome;