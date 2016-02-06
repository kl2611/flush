var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/session_constants.js');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {};

var receiveUser = function(user) {
  _currentUser = user;
};

var removeUser = function() {
  _currentUser = {};
};


SessionStore.all = function () {
  return _currentUser;
};

SessionStore.hasCurrentUser = function() {
  return Object.keys(_currentUser).length > 0;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.RECEIVE_NEW_USER:
      receiveUser(payload.user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.RECEIVE_CURRENT_USER:
      receiveUser(payload.user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.REMOVE_CURRENT_USER:
      removeUser();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
