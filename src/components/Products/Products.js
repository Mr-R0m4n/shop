import {useSelector} from "react-redux";
import Card from "../UI/Card";

import css from './Products.module.css';

const Products = () => {
    const apiData = useSelector(state => state.data.filteredProducts);

    const products = apiData.map(product => {
        return (
            <Card
                key={product.id}
                image={product.image}
                title={product.title}
                rate={product.rating.rate}
                count={product.rating.count}
                price={product.price*0.8}
                sale={product.sale}
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