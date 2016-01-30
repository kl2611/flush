var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserStore = new Store(AppDispatcher);
var UserConstants = require('../constants/user_constants');

var currentUser = [];

var resetUser = function(newUser) {
    currentUser = [];
    currentUser.push(newUser);
};

UserStore.__onDispatch = function(payload) {
    switch(payload.actionType) {
        case UserConstants.USER_RECEIVED:
            resetUser(payload.user);
            UserStore.__emitChange();
            break;
    }
};

UserStore.user = function() {
    return currentUser.slice(0);
}

module.exports = UserStore;
