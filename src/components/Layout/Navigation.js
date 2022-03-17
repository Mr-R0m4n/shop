import css from './Navigation.module.css'
import Button from "../UI/Button";

const Navigation = () => {
    return (
        <nav className={css.navigation}>
            <form className={css.search}>
                <select />
                <input placeholder={'Search...'} type={'search'}/>
                <button type={'submit'}>Search</button>
            </form>
            <div>
                <Button type={'button'}>Cart</Button>
                <Button type={'button'}>User</Button>
                <Button type={'button'}>Logout</Button>
            </div>
        </nav>
    )
};

export default Navigation;