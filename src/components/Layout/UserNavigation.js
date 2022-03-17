import Button from "../UI/Button";

import css from './UserNavigation.module.css'
import bag from '../../assets/bag.svg'
import user from '../../assets/user.svg'

const UserNavigation = () => {
    return (
        <div className={css.userNavigation}>
            <Button type={'button'}>
                <img className={css.icon} src={bag} alt={'shopping bag'}/>
            </Button>
            <Button type={'button'}>
                <img className={css.icon} src={user} alt={'user icon'}/>
            </Button>
            <Button type={'button'}>Logout</Button>
        </div>
    );
};

export default UserNavigation