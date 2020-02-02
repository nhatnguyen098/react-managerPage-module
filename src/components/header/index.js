import React from 'react';

const index = () => {
  return (
    <React.Fragment>
      <div className="navbar-wrapper">
        <a className="navbar-brand" href="#pablo">Dashboard</a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon icon-bar" />
        <span className="navbar-toggler-icon icon-bar" />
        <span className="navbar-toggler-icon icon-bar" />
      </button>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#pablo">
              <i className="material-icons">notifications</i>
              {' '}
              Notifications
            </a>
          </li>
          {/* your navbar here */}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default index;
