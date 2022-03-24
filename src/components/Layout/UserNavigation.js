import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/auth-slice";
import Button from "../UI/Button";

import css from './UserNavigation.module.css';
import bag from '../../assets/bag.svg';
import user from '../../assets/user.svg';

const UserNavigation = () => {
    const shopData = useSelector(state => state.fetch.data);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttonCartLink = () => {
        navigate('/cart');
    };

    const buttonUserLink = () => {
        navigate('/user');
    };

    const buttonLogout = () => {
        navigate('/');
        console.log(shopData)
        dispatch(authActions.logout());
    };

    return (
        <div className={css.userNavigation}>
            <Button onClick={buttonCartLink} type={'button'}>
                <img className={css.icon} src={bag} alt={'shopping bag'}/>
            </Button>
            <Button onClick={buttonUserLink} type={'button'}>
                <img className={css.icon} src={user} alt={'user icon'}/>
            </Button>
            <Button onClick={buttonLogout} type={'button'}>Logout</Button>
        </div>
    );
};

export default UserNavigation;