import {Fragment} from "react";
import Header from "../Layout/Header";
import humming from '../../assets/humming-blue.svg'

import css from './Welcome.module.css'
import Button from "../UI/Button";

const Welcome = () => {
    return (
        <Fragment>
            <Header/>
            <main className={css.welcome}>
                <div className={css.logo}>
                    <img src={humming} alt={'humming bird'}/>
                    <h1>Shopyfly</h1>
                </div>
                <form className={css.login}>
                    <label>E-mail:</label>
                    <input autoComplete={'email'} type={'email'}/>
                    <label>Password:</label>
                    <input autoComplete={'password'} type={'password'}/>
                    <Button type={'submit'}>Login</Button>
                </form>
            </main>
        </Fragment>
    );
};

export default Welcome;