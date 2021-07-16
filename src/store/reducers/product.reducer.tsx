import {
    FETCH_ALL_PRODUCTS,
    FETCH_BEST_PRODUCTS,
    FETCH_TOP_PRODUCTS,
    UPDATE_FILTER
  } from "../actions/product.types";

import { Product } from "../model/product";

const initialState = {
    products: [],
    bestProducts: [],
    topProducts: [],
    filter: undefined
}

const ProductReducer = (state=initialState, action:{type:string; payload: Product[]})=>{
    const { type, payload } = action;
    switch(type){
        case FETCH_BEST_PRODUCTS:
            return{
                ...state,
                bestProducts: payload
            }
        default:
            return state;
    }
}
export default ProductReducer