var ApiActions = require('../actions/api_actions');
var UserActions = require('../actions/user_actions');

var ApiUtil = {
    fetchUsers: function() {
        $.ajax({
            url: "api/users/" + userId,
            data: userId,
            success: function(user) {
                UserActions.receiveCurrentUser(user);
            }
        });
    },

    destroySession: function(id) {
        $ajax({
            url: "/session",
            type: "DELETE",
            data: id,
            success: function () {
                window.location = "/";
            }
        });
    }
};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
