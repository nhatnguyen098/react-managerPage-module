import React, {useState, useEffect} from 'react';
import {NavLink, Prompt} from 'react-router-dom';

const CreateProduct = ({
  submitObj,
  arrCategories,
  categoryList,
  onToggleGetUpdate,
}) => {
  const [obj, setObj] = useState ({
    name: '',
    cateId: '',
    price: '',
    description: '',
    img: '',
  });
  useEffect (
    () => {
      if (onToggleGetUpdate !== null) setObj (onToggleGetUpdate);
    },
    [onToggleGetUpdate]
  );
  const onToggleSetPrompt = (val, messages) => {
    return <Prompt when={val} message={messages} />;
  }
  return (
    <React.Fragment>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Edit Profile</h4>
                  <p className="card-category">Complete your profile</p>
                </div>
                <div className="card-body">
                  <form
                    onSubmit={event => {
                      event.preventDefault ();
                      submitObj (obj);
                    }}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Product Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={obj.name}
                            onChange={e =>
                              setObj ({...obj, name: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Category</label>
                          <select
                            className="form-control"
                            value={obj.cateId}
                            onChange={e =>
                              setObj ({...obj, cateId: e.target.value})}
                          >
                            {categoryList}
                          </select>

                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">
                            Price
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={obj.price}
                            onChange={e =>
                              setObj ({...obj, price: Number (e.target.value)})}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description</label>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows={5}
                              defaultValue={obj.description}
                              onChange={e =>
                                setObj ({...obj, description: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {obj.id ? <NavLink className = 'btn btn-warning pull-right' to = {`/products/remove/${obj.id}`} >Delete</NavLink> : ''}
                    <button
                      type="submit"
                      className="btn btn-primary pull-right"
                      onClick = {onToggleSetPrompt(true, "Are you sure you want to leave?")}
                    >
                      {obj.id ? 'Update' : 'Create'}
                    </button>

                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-profile">
                <div className="card-avatar">
                  <a href="#pablo">
                    <img className="img" src="../assets/img/faces/marc.jpg" />
                  </a>
                </div>
                <div className="card-body">
                  <h1>Image</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/products/list" className="btn btn-primary pull-right">
          Back
        </NavLink>
      </div>

    </React.Fragment>
  );
};

export default CreateProduct;
