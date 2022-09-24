import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartProducts: [],
    cartQuantity: 0,
    cartTotal: 0,
    cartDiscount: 0,
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

            if (state.cartProducts[itemIndex]?.Id === "1") {
                state.cartProducts[itemIndex].productDiscount = state.cartProducts[itemIndex].productQuantity / 4 >> 0
            }
            // TODO: redundant code need to refactor
            if (state.cartProducts[itemIndex]?.Id === "2" || state.cartProducts[itemIndex]?.Id === "3") {
                const findIndex_2 = state.cartProducts.findIndex(
                    (item) => item.Id === "2"
                )
                const findIndex_3 = state.cartProducts.findIndex(
                    (item) => item.Id === "3"
                )
                if (findIndex_2 >= 0 && findIndex_3 >= 0) {
                    const product_id_2 = state.cartProducts[findIndex_2]
                    const product_id_3 = state.cartProducts[findIndex_3]
                    if (product_id_2.productQuantity <= product_id_3.productQuantity) {
                        state.cartProducts[findIndex_3].productDiscount = product_id_2.productQuantity / 2 >> 0
                    }
                    if (product_id_2.productQuantity > product_id_3.productQuantity) {
                        state.cartProducts[findIndex_3].productDiscount = ((product_id_2.productQuantity / 2 >> 0) < product_id_3.productQuantity) ? (product_id_2.productQuantity / 2 >> 0) : product_id_3.productQuantity
                    }
                }
            }
        },
        decreaseProductQuantity: (state, action) => {
            const itemIndex = state.cartProducts.findIndex(
                (item) => item.Id === action.payload.Id
            )
            if (state.cartProducts[itemIndex].productQuantity > 1) {
                state.cartProducts[itemIndex].productQuantity--
                if (state.cartProducts[itemIndex].Id === "1") {
                    state.cartProducts[itemIndex].productDiscount = state.cartProducts[itemIndex].productQuantity / 4 >> 0
                }
            } else if (state.cartProducts[itemIndex].productQuantity === 1) {
                state.cartProducts = state.cartProducts.filter(
                    (item) => item.Id !== action.payload.Id
                )
            }
            // TODO: redundant code need to refactor
            if (state.cartProducts[itemIndex]?.Id === "2" || state.cartProducts[itemIndex]?.Id === "3") {
                const findIndex_2 = state.cartProducts.findIndex(
                    (item) => item.Id === "2"
                )
                const findIndex_3 = state.cartProducts.findIndex(
                    (item) => item.Id === "3"
                )
                if (findIndex_2 >= 0 && findIndex_3 >= 0) {
                    const product_id_2 = state.cartProducts[findIndex_2]
                    const product_id_3 = state.cartProducts[findIndex_3]
                    if (product_id_2.productQuantity <= product_id_3.productQuantity) {
                        state.cartProducts[findIndex_3].productDiscount = product_id_2.productQuantity / 2 >> 0
                    }
                    if (product_id_2.productQuantity > product_id_3.productQuantity) {
                        state.cartProducts[findIndex_3].productDiscount = ((product_id_2.productQuantity / 2 >> 0) < product_id_3.productQuantity) ? (product_id_2.productQuantity / 2 >> 0) : product_id_3.productQuantity
                    }
                }
            }
        },
        getTotalAndDiscount: (state, action) => {
            const { cartTotal, cartDiscount } = state.cartProducts.reduce(
                (acc, item) => {
                    const { Id, Price, productQuantity, productDiscount } = item
                    acc.cartTotal += Price * productQuantity
                    acc.cartDiscount += Id === "1" ? Price * productDiscount : Id === "3" ? Price * productDiscount * 0.5 : 0
                    return acc
                },
                {
                    cartTotal: 0,
                    cartDiscount: 0,
                })
            state.cartTotal = cartTotal
            state.cartDiscount = cartDiscount
        }
    }
})

export const { addProductToCart, decreaseProductQuantity, getTotalAndDiscount } = cartSlice.actions
export default cartSlice.reducer