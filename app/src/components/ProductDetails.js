import AddToCart from './AddToCart';

const ProductDetails = (props) => {
    return (
        <div >
            <div >
                <h5>{props.product.Title}</h5>
                <h2>{props.product.Ranking}</h2>
                <div>
                    <p>{props.product.Description}</p>
                    <p><b>Price:</b> ${props.product.Price}</p>
                    <AddToCart />
                </div>
            </div>

        </div>
    );
}

export default ProductDetails