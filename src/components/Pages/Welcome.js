import {Fragment, useEffect} from "react";
import {dataActions} from "../../store/data-slice";
import {useDispatch} from "react-redux";
import Header from "../Layout/Header/Header";
import Login from "../Login/Login";

import css from './Welcome.module.css';
import humming from '../../assets/humming-blue.svg';

const Welcome = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(dataActions.prepareData());
    })

    return (
        <Fragment>
            <Header/>
            <main className={css.welcome}>
                <div className={css.logo}>
                    <img src={humming} alt={'humming bird'}/>
                    <h1>Shopyfly</h1>
                </div>
                <Login/>
            </main>
        </Fragment>
    );
};

export default Welcome;