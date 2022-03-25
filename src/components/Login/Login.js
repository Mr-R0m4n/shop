import {useDispatch, useSelector} from "react-redux";
import {verifyActions} from "../../store/verify-slice";
import {fetchShopData} from "../../store/fetch-slice";
import {authActions} from "../../store/auth-slice";
import {useNavigate} from "react-router-dom";
import Button from "../UI/Button";

import css from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailIsValid = useSelector(state => state.verify.emailIsValid)
    const passwordIsValid = useSelector(state => state.verify.passwordIsValid)
    const emailInputIsTouched = useSelector(state => state.verify.emailInputIsTouched)
    const passwordInputIsTouched = useSelector(state => state.verify.passwordInputIsTouched)
    const formIsValid = useSelector(state => state.verify.formIsValid)


    const emailChangeHandler = (event) => {
        dispatch(verifyActions.emailValidation(event.target.value))
    }

    const passwordChangeHandler = (event) => {
        dispatch(verifyActions.passwordValidation(event.target.value))
    }

    const validEmailHandler = (event) => {
        dispatch(verifyActions.emailValidation(event.target.value))
    }

    const validPasswordHandler = (event) => {
        dispatch(verifyActions.passwordValidation(event.target.value))
    }

    const buttonLogin = (event) => {
        event.preventDefault();
        dispatch(verifyActions.formValidation())
        if(formIsValid){
            dispatch(fetchShopData());
            dispatch(authActions.onLogin());
            navigate('/main');
            dispatch(verifyActions.setInputIsTouchedFalse())
        }
    };

    let emailCSS, passwordCSS
    if (emailInputIsTouched === false || emailIsValid === true) {
        emailCSS = `${css.valid}`
    }
    else if(emailInputIsTouched === true && emailIsValid === false) {
        emailCSS = `${css.invalid}`
    }
    if (passwordInputIsTouched === false || passwordIsValid === true) {
        passwordCSS = `${css.valid}`
    }
    else if(passwordInputIsTouched === true && passwordIsValid === false) {
        passwordCSS = `${css.invalid}`
    }

    return (
        <form className={css.login}>
            <label>E-mail:</label>
            <input
                className={emailCSS}
                autoComplete={'email'}
                type={'email'}
                onChange={emailChangeHandler}
                onBlur={validEmailHandler}
            />
            <label>Password:</label>
            <input
                className={passwordCSS}
                autoComplete={'password'}
                type={'password'}
                onChange={passwordChangeHandler}
                onBlur={validPasswordHandler}
            />
            <Button onClick={buttonLogin} type={'submit'}>Login</Button>
        </form>
    )
}

export default Login;