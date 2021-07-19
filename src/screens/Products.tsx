import React from "react";
import ProductsList from "../components/ProductsList";

const Products = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-3 order-md-1 mb-4">ProductFilter</div>
      <div className="col-md-9 order-md-2">
        <ProductsList />
      </div>
    </div>
  );
};

export default Products;
