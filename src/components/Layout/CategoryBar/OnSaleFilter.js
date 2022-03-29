import css from "./OnSaleFilter.module.css";

const OnSaleFilter = () => {

    return (
        <div className={css.salefilter}>
            <h3>Sale</h3>
            <div className={css.container}>
                    <input id={'sale'} type="radio" value={'sale'} name={'sale'}/>
                    <label htmlFor="sale">on Sale</label>
                    <input id={'all'} type="radio" value={'all'} name={'sale'} defaultChecked/>
                    <label htmlFor="all">All</label>
            </div>
        </div>
    );
};

export default OnSaleFilter;