var React = require('react');
var SessionActions = require('../../actions/session_actions');

var UserButtons = React.createClass({
    handleLogOut: function(e) {
        e.preventDefault();
        this.props.history.pushState(null, '/');
        SessionActions.logOut();
    },

    render: function() {
        var username = this.props.currentUser.username;

        return (
                <ul className='nav navbar-nav navbar-right'>
                    <li className="dropdown">
                    <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false">
                        {username}  <span className='caret' />
                    </a>

                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#">
                            <span className="glyphicon glyphicon-user" /> About Me</a></li>
                        <li><a href="#">
                            <span className="glyphicon glyphicon-cog" /> Account Settings</a></li>
                        <div className="divider" />
                        <li onClick={this.handleLogOut}><a href="#">
                            <span className="glyphicon glyphicon-log-out" /> Log Out</a>
                        </li>
                    </ul>
                    </li>
                </ul>
        );
    }

});

module.exports = UserButtons;
