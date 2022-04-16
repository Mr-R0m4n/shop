import {useSelector} from "react-redux";
import star from "../../assets/star-filled.svg";

import css from './ProductDetail.module.css'
import Button from "../UI/Button";

const ProductDetail = (props) => {
    const apiData = useSelector(state => state.data.data);
    const product = apiData.find(product => product.id === +props.productId.productId)

    return (
        <section className={css.product}>
            <h1 className={css.title}>{product.title}</h1>
            <img className={css.image} src={product.image} alt={product.title}/>
            <div className={css.rating}>
                <img className={css.star} src={star} alt={'ratingStar'}/>
                <span className={css.rate}>{product.rating.rate}</span>
                <span className={css.count}> ({product.rating.count})</span>
            </div>

            <p className={css.description}>{product.description}</p>
            <h1 className={css.price}>{product.price.toFixed(2)}€</h1>
            <Button type={'button'}>Add to Cart</Button>
        </section>
    );
};

export default ProductDetail;