import Button from "../../UI/Button";
import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dataActions} from "../../../store/data-slice";
import {useNavigate} from 'react-router-dom';

import css from './ProductNavigation.module.css';
import glass from '../../../assets/glass.svg';

const ProductNavigation = () => {
    const searchRef = useRef()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const keyword = useSelector(state => state.data.searchFilter);
    const [input, setInput] = useState('');

    useEffect(() => {
        setInput(keyword)
    },[])

    const buttonSearchHandler = (event) => {
        event.preventDefault();
        dispatch(dataActions.search(searchRef.current.value))
        dispatch(dataActions.filter())
        navigate('/main')
    };

    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    return (
        <form className={css.search}>
            <input ref={searchRef} value={input} onChange={changeHandler} placeholder={'Search...'} type={'search'}/>
            <Button onClick={buttonSearchHandler} type={'submit'}>
                <img className={css.icon} src={glass} alt={'user icon'}/>
            </Button>
        </form>
    );
};

export default ProductNavigation;