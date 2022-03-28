import {useSelector} from "react-redux";

import css from './CategoryBar.module.css';

const CategoryBar = () => {
    const apiData = useSelector(state => state.fetch.data);
    const sortedProductCategorys = [...new Set(apiData.map(product => product.category))].sort();

    const sortedProductCategoryList = sortedProductCategorys.map(category => {
        return (
            <li key={category}>
                <p>{category}</p>
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
            <button>
                <span>4 & Up</span>
            </button>
            <a>
                <p>3 & Up</p>
            </a>
            <a>
                <p>2 & Up</p>
            </a>
            <a>
                <p>1 & Up</p>
            </a>
            <hr/>
            <h3>Price</h3>
            <a>
                <p>0 - 20 EUR</p>
            </a>
            <a>
                <p>20 - 50 EUR</p>
            </a>
            <a>
                <p>50 - 100 EUR</p>
            </a>
            <a>
                <p>100 - 200 EUR</p>
            </a>
            <a>
                <p>200 EUR & more</p>
            </a>
            <hr/>
        </aside>
    );
};

export default CategoryBar;