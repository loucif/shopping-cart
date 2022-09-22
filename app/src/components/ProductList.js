import ProductDetails from './ProductDetails'

const ProductList = (props) => {
    return (
        <div>
            <h3>Product List</h3>
            {props.products.map((product) => (
                <ProductDetails product={product} key={product.Id} />)
            )}
        </div>
    )
}

export default ProductList