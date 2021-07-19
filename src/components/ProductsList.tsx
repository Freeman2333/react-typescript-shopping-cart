import React, { useEffect } from "react";
import { connect } from "react-redux";
import ContentLoader from "./../shared/components/contentLoader";
import { Product } from "./../store/model/product";
import { fetchAllProducts } from "./../store/reducers/product.action";
import ProductCard from "./ProductCard";

const ProductsList = (props: {
  products: Product[];
  fetchAllProducts: () => {};
}) => {
  const { products, fetchAllProducts } = props;
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const iterateProducts = () => {
    if (products.length === 0) {
      return <ContentLoader />;
    }

    return products.map((product: Product) => (
      <div className="col-md-4" key={product._id}>
        <ProductCard product={product} />
      </div>
    ));
  };
  return (
    <div className="products">
      <div className="row">{iterateProducts()}</div>;
    </div>
  );
};

const mapStateToProps = (state: {
  products: {
    products: Product[];
    filter: { seller: string; category: string };
  };
}) => ({
  products: state.products.products,
  filter: state.products.filter,
});

const mapDispatchToProps = {
  fetchAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
