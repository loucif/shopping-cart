import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ProductList from './ProductList'
import fetchProducts from './fetchProducts.config'

const Products = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts().then(response => {
            setProducts(response)
        })
    })

    return (
        <div>
            <ProductList products={products} />
        </div>
    )
}

export default connect(null, actions)(Products)