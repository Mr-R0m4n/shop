import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

import css from './ShoppingCard.module.css';

const ShoppingCard = (props) => {
    const dispatch = useDispatch();

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart({id: props.id}))
    }

    return (
        <div className={`${props.sale ? css.saleCard : css.card}`}>
            {props.children}
            <button onClick={removeFromCartHandler} type={'button'}>Remove</button>
        </div>
    );
};

export default ShoppingCard;