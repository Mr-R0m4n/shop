import {useSelector} from "react-redux";
import Card from "../UI/Card";
import star from '../../assets/star-filled.svg'

import css from './Products.module.css'
import card_css from '../UI/Card.module.css'

const Products = () => {
    const apiData = useSelector(state => state.fetch.data)

    const products = apiData.map(product => {
        return (
            <Card key={product.id}>
                <img className={card_css.image} src={product.image} alt={product.title}/>
                <h3 className={card_css.title}>{product.title}</h3>
                <div className={card_css.info}>
                    <div>
                        <img className={card_css.star} src={star} alt={'ratingStar'}/>
                        <span className={card_css.rate}>{product.rating.rate}</span>
                        <span className={card_css.count}> ({product.rating.count})</span>
                    </div>
                    <span className={card_css.price}>{(product.price).toFixed(2)} €</span>
                </div>

            </Card>
        )
    })

    return (
        <section className={css.products}>
            {products}
        </section>
    );
};

export default Products;