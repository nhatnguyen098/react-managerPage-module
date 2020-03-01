import React, {useState, useEffect} from 'react';
import ProductList from './../components/productPage/list/ProductList';
import {connect, useDispatch, useSelector} from 'react-redux';
import * as actions from './../actions/index';
import ProductItem from './../components/productPage/list/ProductItem';
const ProductsContainer = ({getProduct, dispatchDataByApi,match}) => {
  const dispatch = useDispatch();
  // const pro = useSelector(state => state.productReducer)
  const [products, setProducts] = useState ([]);
  // 
  const pro = useSelector(state => state.productReducer)
  useEffect (() => {
    dispatch(actions.getProAPI())
    // dispatchDataByApi ();
    // setProducts(pro)
    // console.log(pro);
  }, [dispatch]);
  useEffect (
    () => {
      // setProducts (getProduct);
      setProducts(pro )
      console.log(products);
    },
    [pro]
  );
  console.log(products);
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
    // getProduct: state.productReducer,
  };
};
const dispatchActionReducer = (dispatch, props) => {
  return {
    // dispatchDataByApi: () => {
    //   dispatch (actions.getProAPI ());
    // },
  };
};
export default connect (mapStateToPropsReducer, dispatchActionReducer) (
  ProductsContainer
);
