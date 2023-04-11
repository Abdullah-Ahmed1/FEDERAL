import { ActionTypes } from "../constants/actionTypes"
import { products } from "../constants/types"
export const setProducts = (products : products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProduct = (product:products)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload : product
    }
}