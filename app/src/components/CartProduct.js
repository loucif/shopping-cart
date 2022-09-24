import { useDispatch } from "react-redux"
import { decreaseProductQuantity, addProductToCart } from "../features/cartSlice"

const CartProduct = (props) => {

  const dispatch = useDispatch()

  const handleDecreaseProductQuantity = (product) => {
    dispatch(decreaseProductQuantity(product))
  }

  const handleIncreaseProductQuantity = (product) => {
    dispatch(addProductToCart(product))
  }

  return (
    <div>
      <h3>Name&nbsp;:&nbsp;{props.product.Title}</h3>
      <h3>Price&nbsp;:&nbsp;{props.product.Price}</h3>
      <button onClick={() => handleDecreaseProductQuantity(props.product)}>-</button>
      <span>{props.product.productQuantity}</span>
      <button onClick={() => handleIncreaseProductQuantity(props.product)}>+</button>
      <h3>Discount&nbsp;:&nbsp;{props.product.productDiscount}</h3>
    </div>
  )
}

export default CartProduct