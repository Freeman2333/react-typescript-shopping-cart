import { PRODUCTS_DATA } from "../fake_data/products";
import { Product } from "../model/product";

 const getBestProducts = (): Product[]=>{
    return PRODUCTS_DATA.filter(product=>product.isBestProduct)
}

const getTopProducts = (): Product[]=>{
    return PRODUCTS_DATA.filter((product: Product)=>product.isTopProduct)
}

export default {getBestProducts, getTopProducts}