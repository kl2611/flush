var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionActions = require('../../actions/session_actions');

var SignUpForm = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function() {
        return ({
          username: "",
          password: "",
          errors: []
        });
    },

    handleSubmit: function(e) {
        e.preventDefault();

        this.errors = [];
        this.validatePassword();

        if (this.errors.length > 0) {
            this.setState ({
                errors: this.errors
            });
        } else {
            SessionActions.signUp({
                username: this.state.username,
                password: this.state.password
            });
        }
    },

    validatePassword: function() {
        var password = this.state.password;
        var passwordConfirmation = this.state.passwordConfirmation
        if (password.length < 6) {
            this.errors.push("Password length is too short (minimum: 6 characters)")
        }
        if (password !== passwordConfirmation) {
            this.errors.push("Password confirmation and password do not match")
        }
    },

    componentDidMount: function() {
        $(".modal-dialog").addClass("user-modal");
    },

    render: function() {
        var alert = this.state.errors.map(function(error, idx) {
            return (
                <div
                    key={"error" + idx}
                    className = "alert alert-danger"
                    role="alert">
                <strong>{error}</strong>
                </div>
            );
        });

        return (
          <form className='form-signup modal-form' onSubmit={this.handleSubmit}>
            {alert}
            <div className="input-group input-group-lg">
              <span className="input-group-addon" id="sizing-addon1">
                <span className="glyphicon glyphicon-user" />
              </span>
                <input
                    type="username"
                    id="inputUsername"
                    className="form-control"
                    valueLink={this.linkState("username")}
                    placeholder='Username'
                    required
                />
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

                <input
                  type="password"
                  id="passwordConfirmation"
                  className="form-control"
                  valueLink={this.linkState("passwordConfirmation")}
                  placeholder='Confirm Password'
                  required/>
            </div>

            <div className="checkbox">
              <label>
                <input type="checkbox" value="agreement" required></input>
                 I agree to the terms and conditions.
              </label>
            </div>

            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit">
              Sign Up
            </button>
          </form>
        );
    }
});

module.exports = SignUpForm;

