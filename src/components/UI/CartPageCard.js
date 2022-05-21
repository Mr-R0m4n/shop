import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

import css from './CartPageCard.module.css'
import {Link} from "react-router-dom";

const CartPageCard = (props) => {
    const dispatch = useDispatch();

    const increaseItemFromCart = () => {
        dispatch(cartActions.increaseItemFromCart({id: props.id}))
    }

    const decreaseItemFromCart = () => {
        dispatch(cartActions.decreaseItemFromCart({id: props.id}))
    }

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart({id: props.id}))
    }

    return (
        <div className={css.card}>
            <Link to={{pathname: `/product/${props.id}`}}><img className={css.image} src={props.image} alt={props.name}/></Link>
            <div className={css.cardContent}>
                <div className={css.cardInfo}>
                    <p className={css.name}>{props.name}</p>
                    <p>
                        <span>{props.quantity}x</span>
                        <span>{props.price.toFixed(2)} €</span>
                    </p>
                    <p className={css.total}>total: {props.totalPrice.toFixed(2)} €</p>
                </div>
                <div className={css.buttonContainer}>
                    <button className={css.button} onClick={decreaseItemFromCart} type={'button'}>-</button>
                    <button className={css.button} onClick={increaseItemFromCart} type={'button'}>+</button>
                    <button className={css.button} onClick={removeFromCartHandler} type={'button'}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartPageCard;