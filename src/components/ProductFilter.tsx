import React, { useState, useEffect } from "react";
import "./../config/styles/product-filter.scss";
import { connect } from "react-redux";
import { Product } from "./../store/model/product";
import ProductService from "./../store/services/products.service";
import { updateFilter } from "../store/reducers/product.action";
const ProductFilter = ({updateFilter}:{updateFilter:any}) => {
  const [selectedCategory, setCategory] = useState<string>("All")
  const [selectedSellers, setSelectedSellers] = useState<string>("All")
  const [products, setProducts] = useState<Product[]>([])
  useEffect(()=>{
    setProducts(ProductService.getAllProducts())
  },[])
  
  const categorgyFilteredProduct: Product[]=[];
  const sellerFilteredProduct: Product[]=[];

  products.filter((prod: Product)=>{
    const i = categorgyFilteredProduct.findIndex((prdct: Product)=> prdct.productCategory === prod.productCategory)
    const j = sellerFilteredProduct.findIndex((prdct: Product)=> prdct.productSeller === prod.productSeller)
    if (i<= -1) {
      categorgyFilteredProduct.push({...prod})
    }
    if (j<= -1) {
      sellerFilteredProduct.push({...prod})
    }
  });

  const categories: string[] = categorgyFilteredProduct.map((prod: Product)=> prod.productCategory)
  categories.unshift("All")

  const sellers: string[] = sellerFilteredProduct.map((prod: Product)=> prod.productSeller)
  sellers.unshift("All")

  const onSelectChange = (event: any, type: string)=>{
    const value = event.target.value;
    
    if (type==="productCategory") {
      setCategory(value)
    }
    
    if (type==="productSeller") {
      setSelectedSellers(value)
    };
    // console.log(type);
    
    updateFilter(value,type)
  }
  
  return <div className='productFilter'>
    <div id="prdfilter">
      <h4 className="d-flex mb-3">
        <span className="text-muted">
          Filters:
        </span>
      </h4>
      <div className='form-group createProduct'>
        <button className='btn primary-btn w-100'>Create New Product</button>
      </div>
      <div className="form-group">
        <label>By Category:</label>
        <select id='filterPrdCty' className="form-control" value={selectedCategory} onChange={text=> onSelectChange(text, 'productCategory')}>
          {categories.map(category=>(
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>By Seller:</label>
        <select id='filterPrdSeller' className="form-control" value={selectedSellers} onChange={text=> onSelectChange(text, 'productSeller')}>
          {sellers.map(seller=>(
            <option value={seller} key={seller}>
              {seller}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>;
};

const mapStateToProps = (state: {products:{products: []}})=>({
  products: state.products.products
})

const mapDispatchToProps = {updateFilter}

export default connect(mapStateToProps,mapDispatchToProps)(ProductFilter);
