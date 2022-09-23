import { useDispatch } from 'react-redux'
import { addProductToCart } from '../features/cartSlice'

const ProductDetails = (props) => {
    const dispatch = useDispatch()
    const handleAddProductToCart = (product) => {
        dispatch(addProductToCart(product))
    }
    return (
        <div >
            <h5>{props.product.Title}</h5>
            <h2>{props.product.Ranking}</h2>
            <div>
                <p>{props.product.Description}</p>
                <p>Price&nbsp;:&nbsp;{props.product.Price}</p>
                <button onClick={() => handleAddProductToCart(props.product)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails