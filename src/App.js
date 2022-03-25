import {Route, Routes} from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import Main from "./components/Pages/Main";
import User from "./components/Pages/User";
import Detail from "./components/Pages/Detail";
import Cart from "./components/Pages/Cart";
import {useSelector} from "react-redux";

function App() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <Routes>
            <Route path="*" element={isAuthenticated ? <Main/> : <Welcome/>}/>
            <Route path={'/'} element={isAuthenticated ? <Main/> : <Welcome/>}/>
            <Route path={'/main'} element={isAuthenticated ? <Main/> : <Welcome/>}/>
            <Route path={'/user'} element={isAuthenticated ? <User/> : <Welcome/>}/>
            <Route path={'/product'} element={isAuthenticated ? <Detail/> : <Welcome/>}/>
            <Route path={'/cart'} element={isAuthenticated ? <Cart/> : <Welcome/>}/>
        </Routes>
    );
}

export default App;