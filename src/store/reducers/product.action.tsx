import {
  FETCH_ALL_PRODUCTS,
  FETCH_BEST_PRODUCTS,
  FETCH_TOP_PRODUCTS,
  UPDATE_FILTER,
} from "./../actions/product.types";
import ProductService from "../services/products.service";
import { Product } from "../model/product";

export const fetchAllProducts =
  () =>
  async (dispatch: (arg0: { type: string; payload: Product[] }) => void) => {
    const products = ProductService.getAllProducts();
    dispatch({ type: FETCH_ALL_PRODUCTS, payload: products });
  };

export const fetchBestProducts =
  () =>
  async (dispatch: (arg: { type: string; payload: Product[] }) => void) => {
    const products = await ProductService.getBestProducts();
    dispatch({ type: FETCH_BEST_PRODUCTS, payload: products });
  };

export const fetchTopProducts =
  () =>
  async (dispatch: (arg: { type: string; payload: Product[] }) => void) => {
    const products = await ProductService.getTopProducts();
    dispatch({ type: FETCH_TOP_PRODUCTS, payload: products });
  };

export const updateFilter = (payload: string, type = "productCategory")=> async (dispatch:(arg0:{type:string; payload: any})=>void)=>{
  dispatch({
    type: UPDATE_FILTER,
    payload: payload
  }); 
  
  const products: Product[] = [...ProductService.getAllProducts()];
  let filteredData: Product[] = [];
  
  if (payload !== 'All') {
    products.map((prod:any): void=>{
      if (prod[type] === payload) {
        filteredData.push(prod);
      } 
    })
  }else{
    filteredData = products
  }
  dispatch({
    type: FETCH_ALL_PRODUCTS,
    payload: filteredData
  })
}