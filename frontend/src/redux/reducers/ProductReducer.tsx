import { ActionTypes } from "../constants/actionTypes"
import { ProductActions } from "../constants/types"
const initialState={
    products : [
        
    ]
}
export const productReducer = (state = initialState,action:ProductActions)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products : action.payload}
        default:
            return state    
    }
}

export const selectedProductReducer =  ( state = {}, action:ProductActions)=>{
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...action.payload}
        default :
            return state   
    }
}