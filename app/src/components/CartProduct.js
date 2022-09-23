
const CartProduct = (props) => {
  return (
    <div>
      <h3>Name&nbsp;:&nbsp;{props.product.Title}</h3>
      <h3>Price&nbsp;:&nbsp;{props.product.Price}</h3>
      <button>-</button>
      <span>{props.product.productQuantity}</span>
      <button>+</button>
    </div>
  )
}

export default CartProduct