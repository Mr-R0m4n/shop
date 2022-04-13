import css from './ProductNavigation.module.css';
import glass from '../../../assets/glass.svg';
import Button from "../../UI/Button";

const ProductNavigation = () => {
    const buttonSearchHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className={css.search}>
            <input placeholder={'Search...'} type={'search'}/>
            <Button onClick={buttonSearchHandler} type={'submit'}>
                <img className={css.icon} src={glass} alt={'user icon'}/>
            </Button>
        </form>
    );
};

export default ProductNavigation;