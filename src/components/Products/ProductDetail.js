import css from './ProductDetail.module.css'
import {useSelector} from "react-redux";

const ProductDetail = (props) => {
    const apiData = useSelector(state => state.data.data);
    const product = apiData.find(product => product.id === +props.productId.productId)

    return (
        <section className={css.product}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title}/>
            <p>{product.description}</p>
            <h3>{product.rating.rate}</h3>
            <h3>{product.rating.count}</h3>
            <h3>{product.price.toFixed(2)}€</h3>
        </section>
    );
};

export default ProductDetail;