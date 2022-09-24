import CartProduct from './CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTotalAndDiscount } from '../features/cartSlice'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotalAndDiscount())
    }, [cart, dispatch])

    return (
        <>
            <div id="summary" class="w-2/4 px-8 py-10">
                <div class="px-10 py-10">

                    <div class="flex justify-between border-b pb-8">
                        <h1 class="font-semibold text-2xl">My Cart</h1>
                    </div>
                    <div class="flex mt-10 mb-5">
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>
                </div>

                <div>
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


                <div class="bg-green-400 px-10 py-10">
                    <div class="flex justify-between border-b pb-8">
                        <h1 class="font-semibold text-2xl">Order Summary</h1>
                    </div>
                    <div class="flex justify-between mt-10 mb-5">
                        <span class="font-semibold text-sm uppercase">Subtotal</span>
                        <span class="font-semibold text-sm">{cart.cartTotal}$</span>
                    </div>
                    <div class="border-t mt-8">
                        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total Discount</span>
                            <span>{cart.cartDiscount}$</span>
                        </div>
                    </div>
                    <div class="flex justify-between mt-10 mb-5">
                        <span class="font-semibold text-sm uppercase">Total</span>
                        <span class="font-semibold text-sm">{parseFloat(cart.cartDef).toPrecision(12)}$</span>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Cart