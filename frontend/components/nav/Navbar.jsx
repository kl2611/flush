var ReactDOM = require('react-dom');
var React = require('react');
var ApiUtil = require('../../util/api_util');
var ReactRouter = require('react-router');
var UserInfo = require('./UserInfo');
var SearchBar = require('./Search');


var NavBar = React.createClass({
    render: function() {
        return (
            <nav className = "navbar navbar-default">
                <div className = "container-fluid">
                    <div className = "navbar-header">
                    <ul className = "nav navbar-nav navbar-right">
                        <li className="search-bar"><SearchBar location={this.props.location}/></li>
                        <li className="dropdown">
                        <a href="#"
                           className="dropdown-toggle user-avatar"
                           data-toggle="dropdown"
                           role="button"
                           aria-haspopup="true"
                           aria-expanded="false">Username<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li>Sign Out</li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = NavBar;
