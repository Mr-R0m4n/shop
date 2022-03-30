import {useSelector} from "react-redux";
import Card from "../UI/Card";

import css from './Products.module.css';

const Products = () => {
    const apiData = useSelector(state => state.data.filteredProducts);

    const products = apiData.map(product => {
        const saleProduct = Math.floor(Math.random() * 20) + 1;
        if (product.id !== saleProduct) {
            return (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    rate={product.rating.rate}
                    count={product.rating.count}
                    price={product.price}
                    sale={false}
                />
            );
        } else {
            return (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    rate={product.rating.rate}
                    count={product.rating.count}
                    price={product.price * 0.8}
                    sale={true}
                />
            );
        }
    });

    return (
        <section className={css.products}>
            {products}
        </section>
    );
};

export default Products;