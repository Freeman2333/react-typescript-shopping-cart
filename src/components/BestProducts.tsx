import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Product } from "./../store/model/product";
import ProductCard from "./ProductCard";
import ContentLoader from "./../shared/components/contentLoader";
import { fetchBestProducts } from "./../store/reducers/product.action";
const BestProducts = (props: {
  bestProducts: Product[];
  fetchBestProducts: () => {};
}) => {
  const { bestProducts, fetchBestProducts } = props;
  useEffect(() => {
    fetchBestProducts();
  }, [fetchBestProducts]);

  const iterateProducts = () => {
    if (bestProducts.length === 0) {
      return <ContentLoader />;
    }

    return bestProducts.slice(0, 4).map((product: Product) => (
      <div className="col-md-3" key={product._id}>
        <ProductCard product={product} />
      </div>
    ));
  };
  return <div className="row">{iterateProducts()}</div>;
};

const mapStateToProps = (state: { products: { bestProducts: Product[] } }) => ({
  bestProducts: state.products.bestProducts,
});

const mapDispatchToProps = {
  fetchBestProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(BestProducts);
