import css from "./PriceFilter.module.css";

const PriceFilter = () => {

    return (
        <div className={css.pricefilter}>
            <h3>Price</h3>
            <div className={css.container}>
                <input id={'twenty'} type="radio" value={20} name={'price'}/>
                <label htmlFor={'twenty'}>0 - 20 EUR</label>
                <input id={'fifty'} type="radio" value={50} name={'price'}/>
                <label htmlFor={'fifty'}>20 - 50 EUR</label>
                <input id={'hundred'} type="radio" value={100} name={'price'}/>
                <label htmlFor={'hundred'}>50 - 100 EUR</label>
                <input id={'twoHundred'} type="radio" value={200} name={'price'}/>
                <label htmlFor={'twoHundred'}>100 - 200 EUR</label>
                <input id={'over'} type="radio" value={10000} name={'price'}/>
                <label htmlFor={'over'}>200 EUR & more</label>
                <input id={'allPrices'} type="radio" value={'allPrices'} name={'price'} defaultChecked/>
                <label htmlFor="allPrices">All</label>
            </div>
        </div>
    );
};

export default PriceFilter;