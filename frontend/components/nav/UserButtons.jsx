var React = require('react');
var SessionActions = require('../../actions/session_actions');

var UserButtons = React.createClass({
    handleLogOut: function(e) {
        e.preventDefault();
        this.props.history.pushState(null, '/');
        SessionActions.logOut();
    },

    render: function() {
        return (
                <ul className='nav navbar-nav navbar-right'>
                    <li onClick={this.handleLogOut}><a href="#">
                        <span className="glyphicon glyphicon-log-out" /> Log Out</a>
                    </li>
                </ul>
        );
    }

});

module.exports = UserButtons;
