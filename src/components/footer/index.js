import React from 'react';

const index = () => {
  return (
    <React.Fragment>
      <nav className="float-left">
        <ul>
          <li>
            <a href="https://www.creative-tim.com">
              Creative Tim
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright float-right">
        ©
        , made with <i className="material-icons">favorite</i> by
        {/* <a href="https://www.creative-tim.com" target="_blank">
          Creative Tim
        </a> */}
        for a better web.
      </div>
    </React.Fragment>
  );
};

export default index;
