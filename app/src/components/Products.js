import { useState, useEffect } from 'react'
import fetchProducts from './fetchProducts.config'
import ProductDetails from './ProductDetails'

const Products = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts().then(response => {
            setProducts(response)
        })
    })

    return (
        <div>
            <h3>Product List</h3>
            {products.map((product) => (
                <ProductDetails product={product} key={product.Id} />)
            )}
        </div>
    )
}

export default Products