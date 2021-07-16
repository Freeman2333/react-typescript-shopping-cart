import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Product } from "./../store/model/product";
import { fetchTopProducts } from "./../store/reducers/product.action"
const TopProducts = (props:{
    topProducts
}) => {
    return (
        <div>
            TopProducts
        </div>
    )
}

const mapStateToProps= (state: {products:{topProducts: Product[]}})=>({
    topProducts: state.products.topProducts
})

const mapDispatchToProps = {fetchTopProducts}

export default connect(mapStateToProps,mapDispatchToProps)(TopProducts)
