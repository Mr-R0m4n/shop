import {Fragment} from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {authActions} from "../../store/auth-slice";
import Button from "../UI/Button";
import Header from "../Layout/Header";

import css from './Welcome.module.css';
import humming from '../../assets/humming-blue.svg';

const Welcome = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttonLogin = (event) => {
        event.preventDefault();
        dispatch(authActions.login());
        navigate('/main');
    };

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
                    <Button onClick={buttonLogin} type={'submit'}>Login</Button>
                </form>
            </main>
        </Fragment>
    );
};

export default Welcome;