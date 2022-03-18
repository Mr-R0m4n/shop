import {useSelector} from "react-redux";
import ProductNavigation from "./ProductNavigation";
import UserNavigation from "./UserNavigation";

import css from './Header.module.css'
import humming from "../../assets/humming-white.svg";

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    console.log(isLoggedIn)

    return(
        <header className={css.header}>
            <div className={css.logo}>
                <img src={humming} alt={'humming bird'}/>
                <h1>Shopyfly</h1>
            </div>
            {isLoggedIn && <ProductNavigation/>}
            {isLoggedIn && <UserNavigation/>}
        </header>

    )
}

export default Header