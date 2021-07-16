import {
    FETCH_ALL_PRODUCTS,
    FETCH_BEST_PRODUCTS,
    FETCH_TOP_PRODUCTS,
    UPDATE_FILTER
  } from "./../actions/product.types";
  import ProductService from "../services/products.service";
  import { Product } from "../model/product";

  export const fetchBestProducts = ()=> async(dispatch:(arg:{type:string; payload: Product[]})=>void)=>{
    const products = await ProductService.getBestProducts();
    dispatch({type:FETCH_BEST_PRODUCTS, payload: products})
  }

  export const fetchTopProducts = ()=> async(dispatch:(arg:{type:string; payload: Product[]})=> void) =>{
      const products = await ProductService.getTopProducts()
      dispatch({type:FETCH_TOP_PRODUCTS, payload: products})
  }