import {useSelector} from "react-redux";
import ProductNavigation from "./ProductNavigation";
import UserNavigation from "./UserNavigation";

import css from './Header.module.css'
import humming from "../../assets/humming-white.svg";
import {Link} from "react-router-dom";

const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return(
        <header className={css.header}>
            <Link to={isLoggedIn ? '/main' : '/welcome'} className={css.logo}>
                <img src={humming} alt={'humming bird'}/>
                <h1>Shopyfly</h1>
            </Link>
            {isLoggedIn && <ProductNavigation/>}
            {isLoggedIn && <UserNavigation/>}
        </header>

    )
}

export default Header