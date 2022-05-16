import {useDispatch, useSelector} from "react-redux";
import {validActions} from "../../store/valid-slice";
import {authActions} from "../../store/auth-slice";
import {useNavigate} from "react-router-dom";

import css from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailIsValid = useSelector(state => state.valid.emailIsValid);
    const passwordIsValid = useSelector(state => state.valid.passwordIsValid);
    const emailInputIsTouched = useSelector(state => state.valid.emailInputIsTouched);
    const passwordInputIsTouched = useSelector(state => state.valid.passwordInputIsTouched);

    const emailChangeHandler = (event) => {
        dispatch(validActions.emailValidation(event.target.value));
    };

    const passwordChangeHandler = (event) => {
        dispatch(validActions.passwordValidation(event.target.value));
    };

    const validEmailHandler = (event) => {
        dispatch(validActions.emailValidation(event.target.value));
    };

    const validPasswordHandler = (event) => {
        dispatch(validActions.passwordValidation(event.target.value));
    };

    const buttonLogin = (event) => {
        event.preventDefault();
        if (passwordIsValid && emailIsValid) {
            dispatch(authActions.onLogin());
            navigate('/main');
            dispatch(validActions.setInputIsTouchedFalse());
        }
    };

    let emailCSS, passwordCSS;
    if (emailInputIsTouched === false || emailIsValid === true) {
        emailCSS = `${css.valid}`;
    } else if (emailInputIsTouched === true && emailIsValid === false) {
        emailCSS = `${css.invalid}`;
    }
    if (passwordInputIsTouched === false || passwordIsValid === true) {
        passwordCSS = `${css.valid}`;
    } else if (passwordInputIsTouched === true && passwordIsValid === false) {
        passwordCSS = `${css.invalid}`;
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
            <span className={css.tooltip}>
                <input
                    className={passwordCSS}
                    autoComplete={'password'}
                    type={'password'}
                    onChange={passwordChangeHandler}
                    onBlur={validPasswordHandler}
                />
                <span className={css.tooltiptext}>
                    <span>
                        Password must contain:
                    </span>
                    <br/>
                    <span>
                        at least 6 characters.
                    </span>
                    <br/>
                    <span>
                        At least one number,
                    </span>
                    <br/>
                    <span>
                       one upper case letter and
                    </span>
                    <br/>
                    <span>
                       one lower case letter
                    </span>
                </span>
            </span>
            <button onClick={buttonLogin} type={'submit'}>Login</button>
        </form>
    );
};

export default Login;