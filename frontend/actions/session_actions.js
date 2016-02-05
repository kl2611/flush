var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');
var ApiUtil = require('../util/api_util');

var SessionActions = {
    signUp: function(userInfo) {
        ApiUtil.createUserAccount(userInfo, this.receiveNewUser);
    },

    logIn: function(credentials) {
        ApiUtil.createSession(credentials, this.receiveCurrentUser);
    },

    logOut: function() {
        ApiUtil.destroySession(this.removeCurrentUser);
    },

    fetchSession: function() {
        ApiUtil.fetchSession(this.receiveCurrentUser);
    },

    receiveNewUser: function(user) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.RECEIVE_NEW_USER,
            user: user
        });
    },

    receiveCurrentUser: function(user) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.RECEIVE_CURRENT_USER,
            user: user
        });
    },

    removeCurrentUser: function() {
        AppDispatcher.dispatch({
            actionType: SessionConstants.REMOVE_CURRENT_USER
        });
    }
};

module.exports = SessionActions;
