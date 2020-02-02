import React, {useState, useEffect} from 'react';
import CreateProduct from '../components/productPage/create/CreateProduct';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
const ProductsAction = ({
  createNew,
  history,
  dispatchCategoryAPI,
  getCategory,
  match,
  getProductUpdate,
  dispatchDataByApi,
  dispatchRemoveByApi
}) => {
  const [category, setCategory] = useState ([]);
  const [productUpdate,setProUpdate] = useState (null)
  useEffect (() => {
    dispatchCategoryAPI ();
    dispatchDataByApi()
    if(match.params.id_remove){
      dispatchRemoveByApi(match.params.id_remove)
      history.push('/products/list')
    }

  }, []);
  useEffect (
    () => {
      setCategory (getCategory);
    },
    [getCategory]
  );
  useEffect(()=>{
    if(match && getProductUpdate.length > 0){
      getProductUpdate.forEach(s=>{
        if(s.id === match.params.id){
          setProUpdate(s)
        }
      })
    }
  },[getProductUpdate])
  const mapItemCategoryToList = arr => {
    var rs = null;
    if (arr.length > 0) {
      rs = arr.map ((item, index) => {
        return <option key={index} value={item.id}>{item.name}</option>;
      });
    }
    return rs;
  };
  return (
    <CreateProduct
      submitObj={val => {
        createNew (val);
        history.goBack ();
      }}
      // arrCategories={category}
      categoryList={mapItemCategoryToList (category)}
      onToggleGetUpdate = {productUpdate}
    />
  );
};
const mapStateToProps = state => {
  return {
    getCategory: state.categoryReducer,
    getProductUpdate: state.productReducer,
  };
};
const dispatchAction = dispatch => {
  return {
    createNew: obj => {
      if(obj.id){
        dispatch(actions.actionUpdateProAPI(obj))
      }else{
        dispatch (actions.createProAPI (obj));
      }
      
    },
    dispatchCategoryAPI: () => {
      dispatch (actions.getCategoryAPI ());
    },
    dispatchGetProductUpdate: (id) => {
      dispatch(actions.getUpdateProduct(id))
    },
    dispatchDataByApi: () => {
      dispatch (actions.getProAPI ());
    },
    dispatchRemoveByApi: (id) => {
      dispatch(actions.actionRemoveProAPI(id))
    }
  };
};
export default connect (mapStateToProps, dispatchAction) (ProductsAction);
