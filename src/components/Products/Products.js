import {useSelector} from "react-redux";
import Card from "../UI/Card";

import css from './Products.module.css';

const Products = () => {
    const apiData = useSelector(state => state.data.filteredProducts);
    const favItems = useSelector(state => state.fav.favItems);

    const products = apiData.map(product => {
        return (
            <Card
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                rate={product.rating.rate}
                count={product.rating.count}
                price={product.price}
                sale={product.sale}
                fav={favItems}
            />
        )
    });

    return (
        <section className={css.products}>
            {products}
        </section>
    );
};

export default Products;