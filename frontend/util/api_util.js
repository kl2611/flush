//var UserActions = require('../actions/user_actions');

//var SessionActions = require('../actions/session_actions');

var ApiUtil = {
    // fetchUser: function(userId) {
    //     $.ajax({
    //         url: "api/users/" + userId,
    //         data: userId,
    //         success: function(user) {
    //             UserActions.receiveCurrentUser(user);
    //         }
    //     })
    // },

    // destroySession: function(id) {
    //     $ajax({
    //         url: "/session",
    //         type: "DELETE",
    //         data: id,
    //         success: function () {
    //             window.location = "/";
    //         }
    //     });
    // },

    createUserAccount: function(credentials, receiveNewUser) {
        $.ajax({
            url: 'api/users',
            method: "POST",
            data: {user: credentials},
            success: function(user) {
                receiveNewUser(user);
            }
        });
    },

    createSession: function(credentials, receiveCurrentUser) {
        $.ajax({
            url: 'api/session',
            method: "POST",
            data: {user: credentials},
            success: function(user) {
                receiveCurrentUser(user);
            }
            // error: function(error, status) {
            //     debugger;
            //     console.log(status);
            // }
        });
    },

    fetchSession: function(receiveCurrentUser) {
        $.ajax({
            url: 'api/session',
            method: "GET",
            success: function(user) {
                if (user !== null) {
                    receiveCurrentUser(user);
                } else {
                    console.log("not logged in");
                };
            }
        });
    },

    destroySession: function(removeCurrentUser) {
        $.ajax({
            url: 'api/session',
            method: "DELETE",
            success: function() {
                removeCurrentUser();
            }
        });
    }
};

module.exports = ApiUtil;
