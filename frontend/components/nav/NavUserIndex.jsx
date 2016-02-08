var React = require('react');
var SessionStore = require('../../stores/session');
var SessionActions = require('../../actions/session_actions');
var ReviewActions = require('../../actions/review_actions');
var Modal = require('react-bootstrap').Modal;

var UserButtons = require('./UserButtons');
var Buttons = require('./Buttons');

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

        //Dispatch conflicts with fetching session dispatch
        // if (SessionStore.hasCurrentUser()) {
        //     ReviewActions.receiveUserReviews();
        // }
    },

    componentWillUnmount: function() {
        this.sessionListener.remove();
    },

    componentDidMount: function() {
        this.sessionListener = SessionStore.addListener(this._updateCurrentUser);
        SessionActions.fetchSession();
    },

    render: function() {
        var options;
        if (Object.keys(this.state.currentUser).length > 0) {
            options = (<UserButtons
                                    currentUser={this.state.currentUser}
                                    history={this.props.history} />)
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
