import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ShoppingCard from "../UI/ShoppingCard";

import css from './CartBar.module.css'
import bag from "../../assets/bag-blue.svg";
import {cartActions} from "../../store/cart-slice";
import {useEffect} from "react";


const CartBar = () => {
    const cartData = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartActions.getTotalAmount());
    },[cartData]);

    let cartItems;
    if(cartData) {
        cartItems = cartData.map(item => {
            return <li key={item.id}>
                <ShoppingCard sale={item.sale} id={item.id}>
                    <Link to={{pathname: `/product/${item.id}`}}><img className={css.image} src={item.image}
                                                                      alt={item.name}/></Link>
                    <div>
                        <strong>{item.name.slice(0, 16)}...</strong>
                        <p>
                            <span>{item.quantity}x</span>
                            <span>{item.price.toFixed(2)} €</span>
                        </p>
                        <b>total: {item.totalPrice.toFixed(2)} €</b>
                    </div>
                </ShoppingCard>
            </li>
        })
    } else {
        cartItems = []
    }



    return (
        <aside className={css.cartBar}>
            <h3>Your shopping bag</h3>
            <Link to={'/cart'} replace><img className={css.icon} src={bag} alt={'shopping bag'}/></Link>
            <ul>
                {cartItems.length === 0 ? <li><p className={css.empty}>. . . is Empty</p></li> : cartItems}
            </ul>
            {totalAmount > 0 ? <h2>Total amount: {totalAmount.toFixed(2)} €</h2> : <br/>}
        </aside>
    );
};

export default CartBar;