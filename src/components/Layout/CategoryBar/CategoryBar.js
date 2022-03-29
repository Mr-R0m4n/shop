import css from './CategoryBar.module.css';
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";
import OnSaleFilter from "./OnSaleFilter";

const CategoryBar = () => {

    return (
        <aside className={css.categorybar}>
            <CategoryFilter/>
            <hr/>
            <RatingFilter/>
            <hr/>
            <PriceFilter/>
            <hr/>
            <OnSaleFilter/>
            <hr/>
        </aside>
    );
};

export default CategoryBar;