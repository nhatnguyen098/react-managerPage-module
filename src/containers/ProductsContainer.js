import React, {useState, useEffect} from 'react';
import ProductList from './../components/productPage/list/ProductList';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import ProductItem from './../components/productPage/list/ProductItem';
const ProductsContainer = ({getProduct, dispatchDataByApi,match}) => {
  const [products, setProducts] = useState ([]);
  useEffect (() => {
    dispatchDataByApi ();
  }, []);
  useEffect (
    () => {
      setProducts (getProduct);
    },
    [getProduct]
  );

  const mapArrDataToItem = arr => {
    var rs = null;
    if (arr.length > 0) {
      rs = arr.map ((item, index) => {
        return <ProductItem key={index} data={item} />;
      });
    }
    return rs
  };

  return <ProductList proItems={mapArrDataToItem (products)} />;
};
const mapStateToPropsReducer = state => {
  return {
    getProduct: state.productReducer,
  };
};
const dispatchActionReducer = (dispatch, props) => {
  return {
    dispatchDataByApi: () => {
      dispatch (actions.getProAPI ());
    },
  };
};
export default connect (mapStateToPropsReducer, dispatchActionReducer) (
  ProductsContainer
);
