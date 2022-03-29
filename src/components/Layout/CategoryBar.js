import {useSelector} from "react-redux";

import css from './CategoryBar.module.css';

const CategoryBar = () => {
    const apiData = useSelector(state => state.fetch.data);
    const sortedProductCategorys = [...new Set(apiData.map(product => product.category))].sort();

    const sortedProductCategoryList = sortedProductCategorys.map(category => {
        return (
            <li key={category}>
                <button>{category}</button>
            </li>
        );
    });

    return (
        <aside className={css.categorybar}>
            <h3>Categorys</h3>
            <ul>
                {sortedProductCategoryList}
            </ul>
            <hr/>
            <h3>Rating</h3>
            <ul>
                <li><button type='button'>4 & Up</button></li>
                <li><button type='button'>3 & Up</button></li>
                <li><button type='button'>2 & Up</button></li>
                <li><button type='button'>1 & Up</button></li>
            </ul>
            <hr/>
            <h3>Price</h3>
            <ul>
                <li><button type='button'>0 - 20 EUR</button></li>
                <li><button type='button'>20 - 50 EUR</button></li>
                <li><button type='button'>50 - 100 EUR</button></li>
                <li><button type='button'>100 - 200 EUR</button></li>
                <li><button type='button'>200 EUR & more</button></li>
            </ul>
            <hr/>
            <h3>Sale</h3>
            <ul>
                <li><button type='button'>on Sale</button></li>
            </ul>
            <hr/>
        </aside>
    );
};

export default CategoryBar;