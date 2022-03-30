import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";

import css from './CategoryFilter.module.css';
import {dataActions} from "../../../store/data-slice";

const CategoryFilter = () => {
    const apiData = useSelector(state => state.data.data);
    const sortedProductCategories = [...new Set(apiData.map(product => product.category))].sort();

    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        dispatch(dataActions.categoryFilter(event.target.value))
    }

    const sortedProductCategoryList = sortedProductCategories.map(category => {
        return (
            <Fragment key={category}>
                <input id={`${category}`} type={'radio'} value={`${category}`} name={'category'}/>
                <label htmlFor={`${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
            </Fragment>
        );
    });

    return (
        <div className={css.categoryfilter}>
            <h3>Categories</h3>
            <div onChange={onChangeHandler} className={css.container}>
                {sortedProductCategoryList}
                <input id={'allCategories'} type="radio" value={'allCategories'} name={'category'} defaultChecked/>
                <label htmlFor="allCategories">All</label>
            </div>
        </div>
    );
};

export default CategoryFilter;