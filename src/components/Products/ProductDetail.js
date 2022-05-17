import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import Button from "../UI/Button";
import {cartActions} from "../../store/cart-slice";
import {favActions} from "../../store/fav-slice";

import css from './ProductDetail.module.css'
import star from "../../assets/star-filled.svg";
import heartFilled from "../../assets/heart-filled-blue.svg";
import heart from "../../assets/heart.svg";

const ProductDetail = (props) => {
    const selectRef = useRef();
    const apiData = useSelector(state => state.data.data);
    const favItems = useSelector(state => state.fav.favItems);
    const product = apiData.find(product => product.id === +props.id.productId)
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({id: product.id, price: product.price, title: product.title, image: product.image, sale:product.sale, quantity: selectRef.current.value }))
    }

    const favChangeHandler = () => {
        dispatch(favActions.toggleFavItem(+props.id.productId))
    }

    let options = [];
    for (let i = 1; i <= 20; i++){
        options.push(<option key={i} value={i}>{i}</option> )
    }

    let favIcon;
    if(favItems) {
        favIcon = favItems.find(item => item.id === +props.id.productId) ?
            <img onClick={favChangeHandler} className={css.fav} src={heartFilled} alt={'favHeart'}/> :
            <img onClick={favChangeHandler} className={css.fav} src={heart} alt={'favHeart'}/>
    }
    else {
        favIcon = <img onClick={favChangeHandler} className={css.fav} src={heart} alt={'favHeart'}/>
    }

    return (
        <section className={css.product}>
            <h1 className={css.title}>{product.title}</h1>
            <img className={css.image} src={product.image} alt={product.title}/>
            {
                favIcon
            }
            <div className={css.rating}>
                <img className={css.star} src={star} alt={'ratingStar'}/>
                <span className={css.rate}>{product.rating.rate}</span>
                <span className={css.count}> ({product.rating.count})</span>
            </div>

            <p className={css.description}>{product.description}</p>
            <h1 className={`${product.sale ? css.salePrice : css.price}`}>{product.price.toFixed(2)}€</h1>
            <select ref={selectRef}>
                {options}
            </select>
            <Button onClick={addToCartHandler} type={'button'}>Add to Cart</Button>
        </section>
    );
};

export default ProductDetail;