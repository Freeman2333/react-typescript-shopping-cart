import { PRODUCTS_DATA } from "../fake_data/products";
import { Product } from "../model/product";

const getAllProducts = (): Product[] => {
  return PRODUCTS_DATA;
};

const getBestProducts = (): Product[] => {
  return PRODUCTS_DATA.filter((product) => product.isBestProduct);
};

const getTopProducts = (): Product[] => {
  return PRODUCTS_DATA.filter((product: Product) => product.isTopProduct);
};

export default { getBestProducts, getTopProducts, getAllProducts };
