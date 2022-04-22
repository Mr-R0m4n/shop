import {Link} from "react-router-dom";

import css from './ShoppingCard.module.css';
import Button from "./Button";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const ShoppingCard = (props) => {
    const dispatch = useDispatch();

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart({id: props.id}))
    }

    return (
        <div className={`${props.sale ? css.saleCard : css.card}`}>
            {props.children}
            <Button onClick={removeFromCartHandler} type={'button'}>Remove</Button>
        </div>
    );
};

export default ShoppingCard;