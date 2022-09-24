import { useDispatch } from 'react-redux'
import { addProductToCart } from '../features/cartSlice'

const ProductDetails = (props) => {
    const dispatch = useDispatch()
    const handleAddProductToCart = (product) => {
        dispatch(addProductToCart(product))
    }
    return (
        <div class="flex py-7 justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.product.ImageUrl} alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{props.product.Title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        {props.product.Description}
                    </p>
                    <div class="flex items-center mt-2.5 mb-5">
                        {[...Array(props.product.Ranking)].map((e, i) => <svg aria-hidden="true" key={i} class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{props.product.Ranking}.0</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-3xl font-bold">${props.product.Price}</span>
                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => handleAddProductToCart(props.product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails