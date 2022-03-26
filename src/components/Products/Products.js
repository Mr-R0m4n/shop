import {useSelector} from "react-redux";

import css from './Products.module.css'
import Card from "../UI/Card";

const Products = () => {
    const apiData = useSelector(state => state.fetch.data)

    const products = apiData.map(product => {
        return (
            <Card key={product.id}>
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title}/>
                <h2>{product.price} €</h2>
                <h3>
                    <span>{product.rating.rate} / </span>
                    <span>{product.rating.count}</span>
                </h3>
            </Card>
        )
    })

    return (
        <section className={css.products}>
            {products}
        </section>
    );
};

export default Products;