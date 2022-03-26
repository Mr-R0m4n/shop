import {useSelector} from "react-redux";

import css from './CategoryBar.module.css';

const CategoryBar = () => {
    const apiData = useSelector(state => state.fetch.data);
    const sortedProductCategorys = [...new Set(apiData.map(product => product.category))].sort();

    const sortedProductCategoryList = sortedProductCategorys.map(category => {
        return (
            <li key={category}>
                <h1>{category}</h1>
            </li>
        );
    });

    return (
        <aside className={css.categorybar}>
            <ul>
                {sortedProductCategoryList}
            </ul>
        </aside>
    );
};

export default CategoryBar;