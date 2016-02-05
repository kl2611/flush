var React = require('react');
var SessionStore = require('../../stores/session');
var SessionActions = require('../../actions/session_actions');
var ReviewActions = require('../../actions/review_actions');
var Modal = require('react-bootstrap').Modal;

// var AccountButtons = require('./accountButtons.jsx');
var Buttons = require('./Buttons.jsx');

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
            options = (
                <div />
            )
        } else {
            options = (<Buttons history={this.props.history} />)
        };

        return (
            <div>
                {options}
            </div>
        )
    }
});

module.exports = NavUserIndex;
