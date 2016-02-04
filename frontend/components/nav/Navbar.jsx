var ReactDOM = require('react-dom');
var React = require('react');
var ApiUtil = require('../../util/api_util');
var ReactRouter = require('react-router');
// var UserInfo = require('./UserInfo');
var SearchBar = require('./Search');
var Modal = require('react-bootstrap').Modal;


var NavBar = React.createClass({
  getInitialState: function() {
    return ({
      showModal: false
    });
  },

  render: function() {
    var navBar = (
    <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Flush</a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <SearchBar history={this.props.history} />

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    );
    var signUp = (
      <li><a href="" /></li>
    );

    var logIn = (
      <li />
    );

    return (
      <div className = "header-wrapper">
         {navBar}
      </div>
    );

  }
});

module.exports = NavBar;
