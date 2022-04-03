import css from "./RatingFilter.module.css";
import star from "../../../assets/star-filled.svg";
import {useEffect} from "react";
import {dataActions} from "../../../store/data-slice";
import {useDispatch} from "react-redux";

const RatingFilter = () => {
    useEffect(() => {
        dispatch(dataActions.ratingFilter(0))
    },[])

    const dispatch = useDispatch();
    const onChangeHandler = (event) => {
        dispatch(dataActions.ratingFilter(event.target.value))
        dispatch(dataActions.filter())
    }
    return (
        <div className={css.ratingfilter}>
            <h3>Rating</h3>
            <div onChange={onChangeHandler} className={css.container}>
                <input id={'four'} type="radio" value={4} name={'rating'}/>
                <label htmlFor={'four'}><img className={css.star} src={star} alt={'ratingStar'}/>4 & Up</label>
                <input id={'three'} type="radio" value={3} name={'rating'}/>
                <label htmlFor={'three'}><img className={css.star} src={star} alt={'ratingStar'}/>3 & Up</label>
                <input id={'two'} type="radio" value={2} name={'rating'}/>
                <label htmlFor={'two'}><img className={css.star} src={star} alt={'ratingStar'}/>2 & Up</label>
                <input id={'one'} type="radio" value={1} name={'rating'}/>
                <label htmlFor={'one'}><img className={css.star} src={star} alt={'ratingStar'}/>1 & Up</label>
                <input id={'allRatings'} type="radio" value={0} name={'rating'} defaultChecked/>
                <label htmlFor="allRatings">All</label>
            </div>
        </div>
    );
};

export default RatingFilter;