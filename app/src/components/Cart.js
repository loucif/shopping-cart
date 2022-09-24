import CartProduct from './CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTotals } from '../features/cartSlice'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    return (
        <div>
            <h2>My Cart</h2>
            {cart.cartProducts.lenght === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.cartProducts.map((product) => (
                        <CartProduct key={product.Id} product={product} />
                    ))}
                </div>
            )}
            <h2>Total&nbsp;:&nbsp;{cart.cartTotal}</h2>
        </div>
    )
}

export default Cart