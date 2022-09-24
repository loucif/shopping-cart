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
        <div class="w-2/4 bg-gray-400 px-10 py-10">
            <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Products</h1>
            </div>
            {products.map((product) => (
                <ProductDetails product={product} key={product.Id} />)
            )}
        </div>
    )
}

export default Products