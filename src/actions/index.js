import * as types from './../constants/action_types';
import callAPI from '../utils/callAPI';

export const getSideBarAPI = () => {
  return dispatch => {
    return callAPI ('menuItems', 'GET', null).then (res => {
      dispatch (getSideBar (res.data));
    });
  };
};
export const getSideBar = items => {
  return {
    type: types.GET_SIDEBAR,
    items,
  };
};

export const getProAPI = () => {
  return dispatch => {
    return callAPI ('products', 'GET', null).then (res => {
      dispatch (getProduct (res.data));
    });
  };
};

export const getProduct = prs => {
  return {
    type: types.GET_PRODUCT,
    prs,
  };
};

export const createProAPI = pro => {
  return dispatch => {
    return callAPI ('products', 'POST', pro).then (res => {
      dispatch (createPro (res.data));
    });
  };
};
export const createPro = prs => {
  return {
    type: types.CREATE_PRODUCT,
    prs,
  };
};
export const getCategoryAPI = () => {
  return dispatch => {
    return callAPI ('categories', 'GET', null).then (res => {
      dispatch (getCategory (res.data));
    });
  };
};
export const getCategory = categories => {
  return {
    type: types.GET_CATEGORY,
    categories,
  };
};
export const getUpdateProduct = id => {
  return {
    type: types.GET_PRODUCT_UPDATE,
    id,
  };
};
export const actionUpdateProAPI = obj => {
  return dispatch => {
    return callAPI (`products/${obj.id}`, 'PUT', obj).then (rs =>
      dispatch (actionUpdateProduct (rs.data))
    );
  };
};
export const actionUpdateProduct = obj => {
  return {
    type: types.UPDATE_PRODUCT,
    obj,
  };
};
export const actionRemoveProAPI = id => {
  return dispatch => {
    return callAPI (`products/${id}`, 'DELETE', null).then (rs => {
      dispatch (removeProduct (id))
    }
      
    );
  };
};
export const removeProduct = id => {
  return {
    type: types.REMOVE_PRODUCT,
    id,
  };
};
