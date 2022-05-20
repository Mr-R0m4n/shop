import css from './ProductNavigation.module.css';
import glass from '../../../assets/glass.svg';
import Button from "../../UI/Button";
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {dataActions} from "../../../store/data-slice";

const ProductNavigation = () => {
    const searchRef = useRef()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataActions.search(searchRef.current.value))
        dispatch(dataActions.filter())
    },[])

    const buttonSearchHandler = (event) => {
        event.preventDefault();
        dispatch(dataActions.search(searchRef.current.value))
        dispatch(dataActions.filter())
    };

    return (
        <form className={css.search}>
            <input ref={searchRef} placeholder={'Search...'} type={'search'}/>
            <Button onClick={buttonSearchHandler} type={'submit'}>
                <img className={css.icon} src={glass} alt={'user icon'}/>
            </Button>
        </form>
    );
};

export default ProductNavigation;