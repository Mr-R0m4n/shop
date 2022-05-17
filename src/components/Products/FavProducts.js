import {useSelector} from "react-redux";
import Card from "../UI/Card";
import css from "./FavProducts.module.css";

const FavProducts = () => {

    const apiData = useSelector(state => state.data.filteredProducts);
    const favItems = useSelector(state => state.fav.favItems);

    let favItemIds;
    let filteredItems;
    let favItemCards
    if (favItems) {
        favItemIds = favItems.map(item => item.id)
        filteredItems = apiData.filter(item => favItemIds.includes(item.id))
        favItemCards = filteredItems.map(item => {
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
                {favItemIds.length === 0 ? <h1 className={css.noFav}>No favourites found...</h1> : favItemCards}
            </section>
        )
    }
    else {
        return (
            <section className={css.favProducts}>
                <h1 className={css.noFav}>No favourites found...</h1>
            </section>
        )
    }


}

export default FavProducts;