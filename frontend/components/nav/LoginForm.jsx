var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionActions = require('../../actions/sessionAction.js');

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

        SessionActions.logIn({
            username: this.state.username,
            password: this.state.password
        });
    },

    fillOutLogin: function() {
        var username = "guest"
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
                className="form-signin modal-form"
                autoComplete="off"
                onSubmit={this.handleSubmit}>

                <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                        <span className="glyphicon glyphicon-user" />
                    </span>
                    <input
                        type="email"
                        id="inputEmail"
                        className = "form-control"
                        valueLink={this.linkState("username")}
                        placeholder="Username"
                        required
                        autofocus />
                </div>

                <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon2">
                        <span className="glyphicon glyphicon-lock" />
                    </span>
                    <input
                    type="password"
                    id="inputPassword"
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
