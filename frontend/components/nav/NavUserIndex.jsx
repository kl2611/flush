var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var SessionActions = require('../../actions/sessionAction');
var ReviewActions = require('../../actions/review_actions');
var Modal = require('react-bootstrap').Modal;


// var AccountButtons = require('./accountButtons.jsx');
// var SignUpLoginButtons = require('./signUpLoginButtons.jsx');

var NavUserIndex = React.createClass({
    getInitialState: function() {
        return({
            currentUser: SessionStore.all()
        });
    },

    _updateCurrentUser: function() {
        this.setState({
            currentUser: SessionStore.all()
        });
        if (SessionStore.hasCurrentUser()) {
            ReviewActions.receiveUserReviews();
        }
    },

    componentWillUnmount: function() {
        this.sessionListener.remove();
    },

    componentDidMount: function() {
        this.sessionListener = SessionStore.addListener(this._updateCurrentUser);
        SessionActions.fetchSession();
    },

    render: function() {
        var button;
        if (Object.keys(this.state.currentUser).length > 0) {
            button = (
                <AccountButtons
                    currentUser = {this.state.currentUser}>
            )
        }
    }
});
