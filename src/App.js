import {Route, Routes} from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import Main from "./components/Pages/Main";
import User from "./components/Pages/User";
import Detail from "./components/Pages/Detail";
import Cart from "./components/Pages/Cart";
import {useSelector} from "react-redux";

function App() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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