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
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div class="flex w-2/5">
        <div class="w-20">
          <img class="h-24" src={props.product.ImageUrl} alt=""></img>
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-sm">{props.product.Title}</span>
        </div>
      </div>

      <div className="flex justify-center w-1/5">
        <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
          <button className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" onClick={() => handleDecreaseProductQuantity(props.product)}>-</button>
          <button className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">{props.product.productQuantity}</button>
          <button className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" onClick={() => handleIncreaseProductQuantity(props.product)}>+</button>
        </div>
      </div>

      <span class="text-center w-1/5 font-semibold text-sm">{props.product.Price}$</span>

      {props.product.productDiscount === 0 ? (
        <span class="text-center w-1/5 font-semibold text-sm">${parseFloat((props.product.Price * props.product.productQuantity).toPrecision(12))}</span>
      ) : (
        <div className="w-1/5 text-center  font-semibold text-sm flex flex-col items-center">
          <span class=" line-through text-red-500">${parseFloat((props.product.Price * props.product.productQuantity).toPrecision(12))}</span>
          {props.product.Id === "3" ? (
            <span class="">${parseFloat((props.product.Price * props.product.productQuantity) - (props.product.Price * 0.5 * props.product.productDiscount).toPrecision(12))}</span>
          ) : (
            <span class="">${parseFloat((props.product.Price * props.product.productQuantity) - (props.product.Price * props.product.productDiscount).toPrecision(12))}</span>
          )}
        </div>
      )}
    </div>
  )
}

export default CartProduct