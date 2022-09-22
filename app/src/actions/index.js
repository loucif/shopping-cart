import * as types from './action-types'

export function addCartAction(cartValue) {
    return {
        type: types.ADD_CART,
        payload: cartValue
    }
}