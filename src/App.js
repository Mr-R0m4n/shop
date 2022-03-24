import {Route, Routes, useNavigate} from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import Main from "./components/Pages/Main";
import User from "./components/Pages/User";
import Detail from "./components/Pages/Detail";
import Cart from "./components/Pages/Cart";
import {useEffect} from "react";
import {useSelector} from "react-redux";

function App() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchShopData().catch((error) => {
    //         console.log(error.message);
    //     });
    // },[]);

    const fetchShopData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Ooooops Something went wrong....');
        }

        const data = await response.json();

        console.log(data);
    };

    return (
        <Routes>
            <Route path="*" element={isLoggedIn ? <Main/> : <Welcome/>}/>
            <Route path={'/'} element={isLoggedIn ? <Main/> : <Welcome/>}/>
            <Route path={'/main'} element={isLoggedIn ? <Main/> : <Welcome/>}/>
            <Route path={'/user'} element={isLoggedIn ? <User/> : <Welcome/>}/>
            <Route path={'/product'} element={isLoggedIn ? <Detail/> : <Welcome/>}/>
            <Route path={'/cart'} element={isLoggedIn ? <Cart/> : <Welcome/>}/>
        </Routes>
    );
}

export default App;