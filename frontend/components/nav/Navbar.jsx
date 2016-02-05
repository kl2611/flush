var ReactDOM = require('react-dom');
var React = require('react');
var ApiUtil = require('../../util/api_util');
var ReactRouter = require('react-router');
// var UserInfo = require('./UserInfo');
var SearchBar = require('./Search');
// var LoggedOut = require("./logged_out");
var NavUserIndex = require('./NavUserIndex');

var Modal = require('react-bootstrap').Modal;
var History = require("react-router").History;


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
            <NavUserIndex history={this.props.history} />
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
