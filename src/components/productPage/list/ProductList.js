import React from 'react';
import {NavLink} from 'react-router-dom';

const ProductList = ({proItems}) => {
  return (
    <React.Fragment>
      <div className="col-md-12">
        <div className="card card-plain">
          <div className="card-header card-header-primary row">
            <div className="col-6">
              <h4 className="card-title mt-0"> Table on Plain Background</h4>
              <p className="card-category">
                Here is a subtitle for this table
              </p>
            </div>
            <div className="col-6">
              <NavLink
                className="pull-right btn btn-primary"
                to="/products/create"
              >
                Create New
              </NavLink>
            </div>

          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>
                      ID
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Country
                    </th>
                    <th>
                      City
                    </th>
                    <th>
                      Salary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {proItems}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
