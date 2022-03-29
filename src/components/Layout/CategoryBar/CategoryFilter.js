import {useSelector} from "react-redux";
import {Fragment} from "react";

import css from './CategoryFilter.module.css';

const CategoryFilter = () => {
    const apiData = useSelector(state => state.fetch.data);
    const sortedProductCategorys = [...new Set(apiData.map(product => product.category))].sort();

    const sortedProductCategoryList = sortedProductCategorys.map(category => {
        return (
            <Fragment key={category}>
                <input id={`${category}`} type={'radio'} value={`${category}`} name={'category'}/>
                <label htmlFor={`${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
            </Fragment>
        );
    });

    return (
        <div className={css.categoryfilter}>
            <h3>Categorys</h3>
            <div className={css.container}>
                {sortedProductCategoryList}
                <input id={'allCategorys'} type="radio" value={'allCategorys'} name={'category'} defaultChecked/>
                <label htmlFor="allCategorys">All</label>
            </div>
        </div>
    );
};

export default CategoryFilter;