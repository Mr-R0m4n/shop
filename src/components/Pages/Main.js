import {Route, Routes} from "react-router-dom";

const Main = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
        </Routes>
    );
};

export default Main;