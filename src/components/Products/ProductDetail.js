import {useDispatch, useSelector} from "react-redux";
import star from "../../assets/star-filled.svg";

import css from './ProductDetail.module.css'
import Button from "../UI/Button";
import {cartActions} from "../../store/cart-slice";

const ProductDetail = (props) => {
    const apiData = useSelector(state => state.data.data);
    const product = apiData.find(product => product.id === +props.productId.productId)
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({id: product.id, price: product.price, title: product.title, image: product.image}))
    }

    let options = [];
    for (let i = 1; i <= 20; i++){
        options.push(<option key={i} value={i}>{i}</option> )
    }

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
            <h1 className={`${product.sale ? css.salePrice : css.price}`}>{product.price.toFixed(2)}€</h1>
            <Button onClick={addToCartHandler} type={'button'}>Add to Cart</Button>
        </section>
    );
};

export default ProductDetail;