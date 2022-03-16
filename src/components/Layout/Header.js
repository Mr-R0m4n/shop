import humming from "../../assets/humming.svg";
import Navigation from "./Navigation";

const Header = () => {
    return(
        <header>
            <img src={humming} alt={'humming bird'}/>
            <h1>Shopyfly</h1>
            <Navigation/>
        </header>

    )
}

export default Header