import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import Button from "../../UI/Button";
import {authActions} from "../../../store/auth-slice";
import bag from "../../../assets/bag.svg";
import user from "../../../assets/user.svg";
import home from "../../../assets/home.svg";
import heart from "../../../assets/heart.svg";

import css from './Footer.module.css';

const Footer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttonHomeLink = () => {
        navigate('/main');
    };

    const buttonUserLink = () => {
        navigate('/user');
    };

    const buttonFavLink = () => {
        navigate('/fav');
    };

    const buttonCartLink = () => {
        navigate('/cart');
    };

    const buttonLogout = () => {
        navigate('/');
        dispatch(authActions.onLogout());
    };

    return (
        <footer className={css.footer}>
            <Button onClick={buttonHomeLink} type={'button'}>
                <img className={css.icon} src={home} alt={'shopping bag'}/>
            </Button>
            <Button onClick={buttonUserLink} type={'button'}>
                <img className={css.icon} src={user} alt={'user icon'}/>
            </Button>
            <Button onClick={buttonFavLink} type={'button'}>
                <img className={css.icon} src={heart} alt={'shopping bag'}/>
            </Button>
            <Button onClick={buttonCartLink} type={'button'}>
                <img className={css.icon} src={bag} alt={'shopping bag'}/>
            </Button>
            <Button onClick={buttonLogout} type={'button'}>Logout</Button>
        </footer>
    );
};

export default Footer;