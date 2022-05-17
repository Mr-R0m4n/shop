import {useSelector} from "react-redux";
import Card from "../UI/Card";
import css from "./FavProducts.module.css";

const FavProducts = () => {

    const apiData = useSelector(state => state.data.filteredProducts);
    const favItems = useSelector(state => state.fav.favItems);

    const favItemIds = favItems.map(item => item.id)

    const filteredItems = apiData.filter(item => favItemIds.includes(item.id))

    const renderFavItems = filteredItems.map(item => {
        return(
            <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                rate={item.rating.rate}
                count={item.rating.count}
                price={item.price}
                sale={item.sale}
                fav={favItems}
            />
        )
    })

    return (
        <section className={css.favProducts}>
            {renderFavItems}
        </section>
    )
}

export default FavProducts;