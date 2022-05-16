import {Fragment} from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import {useSelector} from "react-redux";

const Favorites = () => {

    const favoriteItems = useSelector(state => state.fav.favItems);
    console.log(favoriteItems)

    return (
        <Fragment>
            <Header/>
            <h1>FAVORITES</h1>
            <Footer/>
        </Fragment>
    );
};

export default Favorites;