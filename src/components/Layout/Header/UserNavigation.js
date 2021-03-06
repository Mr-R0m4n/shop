import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {authActions} from '../../../store/auth-slice';
import {validActions} from '../../../store/valid-slice';
import Button from '../../UI/Button';

import css from './UserNavigation.module.css';
import bag from '../../../assets/bag.svg';
import user from '../../../assets/user.svg';
import heart from '../../../assets/heart-filled.svg';

const UserNavigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttonCartLink = () => {
        navigate('/cart');
    };

    const buttonFavLink = () => {
        navigate('/fav');
    };

    const buttonUserLink = () => {
        navigate('/user');
    };

    const buttonLogout = () => {
        navigate('/');
        dispatch(validActions.setValidationFalse());
        dispatch(authActions.onLogout());
    };

    return (
        <div className={css.userNavigation}>
            <Button onClick={buttonCartLink} type={'button'}>
                <img className={css.icon} src={bag} alt={'shopping bag'}/>
            </Button>
            <Button onClick={buttonFavLink} type={'button'}>
                <img className={css.icon} src={heart} alt={'shopping bag'}/>
            </Button>
            <Button onClick={buttonUserLink} type={'button'}>
                <img className={css.icon} src={user} alt={'user icon'}/>
            </Button>
            <Button onClick={buttonLogout} type={'button'}>Logout</Button>
        </div>
    );
};

export default UserNavigation;