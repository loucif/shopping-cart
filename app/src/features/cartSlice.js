import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartProducts: [],
    cartQuantity: 0,
    cartTotal: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const itemIndex = state.cartProducts.findIndex(
                (item) => item.Id === action.payload.Id
            )
            if (itemIndex >= 0) {
                state.cartProducts[itemIndex].productQuantity++
            } else {
                state.cartProducts.push({
                    ...action.payload,
                    productQuantity: 1,
                })
            }
        },
    }
})

export const { addProductToCart } = cartSlice.actions
export default cartSlice.reducer