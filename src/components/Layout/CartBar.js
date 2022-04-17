import css from './CartBar.module.css'
import {useSelector} from "react-redux";
import ShoppingCard from "../UI/ShoppingCard";

const CartBar = () => {
    const cartData = useSelector(state => state.cart.items);

    const cartItems = cartData.map(item => {
        return <li key={item.id}>
            <ShoppingCard>
                <img src={item.image} alt={item.name}/>
                <div>
                    <b>{item.name.slice(0,16)}...</b>
                    <p>
                        <span>{item.quantity}x</span>
                        <span>{item.price.toFixed(2)} €</span>
                    </p>
                    <b>total: {item.totalPrice.toFixed(2)} €</b>
                </div>
            </ShoppingCard>
        </li>
    })

    return (
        <aside className={css.cartBar}>
            <h3>Your Shoppingcart</h3>
            <ul>
                {cartItems}
            </ul>
        </aside>
    );
};

export default CartBar;