import css from './ProductDetail.module.css'

const ProductDetail = () => {
    return (
        <section className={css.product}>
            <h1>TITLE</h1>
            <h2>IMAGE</h2>
            <p>DESCRIPTION</p>
            <h3>RATIN</h3>
            <h3>COUNT</h3>
            <h3>PRICE</h3>
        </section>
    );
};

export default ProductDetail;