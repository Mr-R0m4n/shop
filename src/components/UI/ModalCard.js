import css from './ModalCard.module.css'

const ModalCard = (props) => {
    return (
        <div className={css.card}>
            <p className={css.name}>{props.name}</p>
            <p className={css.quantityPrice}>
                <span>{props.quantity} x </span>
                <span>{props.price.toFixed(2)}€  </span>
            </p>
            <p className={css.totalPrice}>total: {props.totalPrice.toFixed(2)}€</p>
        </div>
    );
};

export default ModalCard;