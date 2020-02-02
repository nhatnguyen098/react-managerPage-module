import React, {useState,useEffect} from 'react';
import SideBar from './../components/sidebarMenu/NavbarMenu';
import {connect} from 'react-redux';
import * as actions from './../actions/index'
import {Link, Route} from 'react-router-dom';
const SideBarContainer = ({getSideBarAPI, onToggleGetSideBar}) => {
    const [menuData, setMenuData] = useState ([]);
    useEffect (() => {
      onToggleGetSideBar ();
    }, []);
    useEffect (
      () => {
        setMenuData (getSideBarAPI);
      },
      [getSideBarAPI]
    );
  const CustomMenu = ({label, to, activeOnlyWhenExact, icon}) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({match}) => {
          var class_name = match ? 'active' : '';
          return (
            <li className={`nav-item ${class_name}`}>
              <Link to={to} className="nav-link">
                <i className="material-icons">{icon}</i>
                <p>{label}</p>
              </Link>
            </li>
          );
        }}
      />
    );
  };

  const mapToMenu = arr => {
    var rs = null;
    if (arr.length > 0) {
      rs = arr.map ((item, index) => {
        return (
          <CustomMenu
            key={index}
            label={item.label}
            to={item.to}
            activeOnlyWhenExact={item.exact}
            icon={item.icon}
          />
        );
      });
    }
    return rs;
  };
  return <SideBar mapToMenu = {mapToMenu(menuData)}/>;
};
const mapStateToPropsReducer = state => {
  return {
    getSideBarAPI: state.sidebarReducer,
  };
};
const getSideBarByAPI = (dispatch, props) => {
  return {
    onToggleGetSideBar: () => {
      dispatch (actions.getSideBarAPI ());
    },
  };
};
export default connect (mapStateToPropsReducer, getSideBarByAPI) (
  SideBarContainer
);
