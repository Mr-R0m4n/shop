import css from "./OnSaleFilter.module.css";
import {useEffect} from "react";
import {dataActions} from "../../../store/data-slice";
import {useDispatch} from "react-redux";

const OnSaleFilter = () => {
    useEffect(() => {
        dispatch(dataActions.saleFilter('false'))
        dispatch(dataActions.filter())
    },[])

    const dispatch = useDispatch();
    const onChangeHandler = (event) => {
        dispatch(dataActions.saleFilter(event.target.value))
        dispatch(dataActions.filter())
    }

    return (
        <div className={css.salefilter}>
            <h3>Sale</h3>
            <div onChange={onChangeHandler} className={css.container}>
                    <input id={'sale'} type="radio" value={true} name={'sale'}/>
                    <label htmlFor="sale">on Sale</label>
                    <input id={'allProducts'} type="radio" value={false} name={'sale'} defaultChecked/>
                    <label htmlFor="allProducts">All</label>
            </div>
        </div>
    );
};

export default OnSaleFilter;