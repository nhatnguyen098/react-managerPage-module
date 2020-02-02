import React from 'react';
const NavbarMenu = ({mapToMenu}) => {
  return (
    <React.Fragment>
      <div className="logo">
        <a href="http://www.creative-tim.com" className="simple-text logo-mini">
          CT
        </a>
        <a
          href="http://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          Creative Tim
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {mapToMenu}
          {/* your sidebar here */}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavbarMenu;
