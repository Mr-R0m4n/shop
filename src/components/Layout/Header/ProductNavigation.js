import css from './ProductNavigation.module.css';
import glass from '../../../assets/glass.svg';
import Button from "../../UI/Button";
import {useSelector} from "react-redux";

const ProductNavigation = () => {
    const apiData = useSelector(state => state.fetch.data);
    const sortedProductCategorys = [...new Set(apiData.map(product => product.category))].sort();

    const sortedProductCategoryList = sortedProductCategorys.map(category => {
        return (
            <option key={`${category}`} value={`${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
        );
    });
    
    const buttonSearchHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className={css.search}>
            <select>
                <option value={'all'}>All</option>
                {sortedProductCategoryList}
            </select>
            <input placeholder={'Search...'} type={'search'}/>
            <Button onClick={buttonSearchHandler} type={'submit'}>
                <img className={css.icon} src={glass} alt={'user icon'}/>
            </Button>
        </form>
    );
};

export default ProductNavigation;