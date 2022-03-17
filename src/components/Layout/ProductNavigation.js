import css from './ProductNavigation.module.css'
import glass from '../../assets/glass.svg'
import Button from "../UI/Button";

const ProductNavigation = () => {
    return (
            <form className={css.search}>
                <select />
                <input placeholder={'Search...'} type={'search'}/>
                <Button type={'submit'}>
                    <img className={css.icon} src={glass} alt={'user icon'}/>
                </Button>
            </form>
    )
};

export default ProductNavigation;