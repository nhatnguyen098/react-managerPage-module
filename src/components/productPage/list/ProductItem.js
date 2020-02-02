import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductItem = ({data}) => {
  return (
    <React.Fragment>
      <tr>
        <td>
          {data.id}
        </td>
        <td>
          {data.cateId}
        </td>
        <td>
          {data.name}
        </td>
        <td>
          {data.price}
        </td>
        <td>
          {data.description}
        </td>
        <td>
          <NavLink to = {`/products/create/${data.id}`}>Detail</NavLink>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default ProductItem;
