import css from './Card.module.css';
import star from "../../assets/star-filled.svg";

const Card = (props) => {
    return (
        <div className={`${props.sale ? css.saleCard : css.card}`}>
            <img className={css.image} src={props.image} alt={props.title}/>
            <h3 className={css.title}>{props.title}</h3>
            <div className={css.info}>
                <div>
                    <img className={css.star} src={star} alt={'ratingStar'}/>
                    <span className={css.rate}>{props.rate}</span>
                    <span className={css.count}> ({props.count})</span>
                </div>
                {props.sale ? <span className={css.sale}>Sale</span> : ''}
                <span className={`${props.sale ? css.salePrice : css.price}`}>{(props.price).toFixed(2)} €</span>
            </div>
        </div>
    );
};

export default Card;