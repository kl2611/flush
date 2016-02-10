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

          <a href="#" className="pull-left">
            <img src="http://res.cloudinary.com/kellyliu/image/upload/v1455066768/flushr-logo_copy_ltm8na.png"
                      height="80" />
          </a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <form className="navbar-form navbar-nav" role="search">
          <div className="form-group">
            <strong>Find   </strong> <input type="text" className="form-control" size="15" value="Restrooms" readOnly />
          </div>
        </form>

        <SearchBar history={this.props.history} />

          <ul className="nav navbar-nav navbar-right">
            <NavUserIndex history={this.props.history} />
          </ul>

        </div>
      </div>
    </nav>
    );
    // var signUp = (
    //   <li><a href="" /></li>
    // );

    // var logIn = (
    //   <li />
    // );

    return (
      <div className = "header-wrapper">
        <div className="shadow">
           {navBar}
        </div>
      </div>
    );

  }
});

module.exports = NavBar;
