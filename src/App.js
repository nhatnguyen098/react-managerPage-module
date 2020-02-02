import React from 'react';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Routes from './Routes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideBarContainer from './containers/SideBarContainer';
// import './App.css';

const App = () => {
  const mapRoutesItemToMenu = arr => {
    var rs = null;
    if (arr.length > 0) {
      rs = arr.map ((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            component={item.main}
            exact={item.exact}
          />
        );
      });
    }
    return rs;
  };
  return (
    <Router>
      <div className="App wrapper">
        <div
          className="sidebar"
          data-color="purple"
          data-background-color="white"
        >
          <SideBarContainer />
        </div>
        <div className="main-panel">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
            <div className="container-fluid">
              <Header />
            </div>
          </nav>
          {/* End Navbar */}

          {/* your content here */}
          <div className="content">
            <div className="container-fluid">
              <Switch>
                {mapRoutesItemToMenu (Routes)}
              </Switch>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <Footer />
              {/* your footer here */}
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
