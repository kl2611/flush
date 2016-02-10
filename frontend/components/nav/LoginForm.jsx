var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionActions = require('../../actions/session_actions.js');

var LoginForm = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function() {
        return({
            username: "",
            password: ""
        });
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var username = this.state.username.toLowerCase();
        var password= this.state.password;

        SessionActions.logIn({
            username: username,
            password: password
        });
    },

    fillOutLogin: function() {
        var username = "kelly"
        var password = "password"

        this.setState({
            username: username,
            password: password
        });
    },

    componentDidMount: function() {
        $("modal-dialog").addClass("user-modal");
    },

    render: function() {
        return (
            <form
                name="authenticity_token"
                className="form-signin modal-form"
                autoComplete="off"
                onSubmit={this.handleSubmit}>

                <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                        <span className="glyphicon glyphicon-user" />
                    </span>
                    <input
                        type="text"
                        name="user[username]"
                        id="user_username"
                        className = "form-control"
                        valueLink={this.linkState("username")}
                        placeholder="Username"
                        required
                        />
                </div>

                <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon2">
                        <span className="glyphicon glyphicon-lock" />
                    </span>
                    <input
                    type="password"
                    name="user[password]"
                    id="user_password"
                    className="form-control"
                    valueLink={this.linkState("password")}
                    placeholder='Password'
                    required />
                </div>

                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"></input>
                         Remember me
                    </label>

                    <button
                        className="btn btn-success"
                        type="button"
                        style={{float: "right"}}
                        onClick={this.fillOutLogin}>
                        Demo Account
                    </button>

                </div>

                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit">
                    Log In
                </button>

            </form>
        );
    }

});

module.exports = LoginForm;
