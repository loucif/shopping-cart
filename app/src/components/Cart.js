import CartProduct from './CartProduct'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart)

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
        </div>
    )
}

export default Cart