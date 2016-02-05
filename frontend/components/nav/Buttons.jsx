var React = require('react');
var Modal = require('react-bootstrap').Modal;
var LoginForm = require('./LoginForm');
var SignUpForm = require('./SignUpForm');

var Buttons = React.createClass({
    getInitialState: function() {
        return ({
            showModal: false,
            modalType: ""
        });
    },

    openSignUp: function() {
        this.setState({
            showModal: true,
            modalType: "Sign Up"
        });
    },

    openLogin: function() {
        this.setState({
            showModal: true,
            modalType: "Login"
        });
    },

    closeModal: function() {
        this.setState({
            showModal: false
        });
    },

    componentWillUnmount: function() {
        this.refs.navmodal._onHide();
    },

    render: function() {
        var ModalForm = this.state.modalType === "Login" ? LoginForm : SignUpForm;

        return (
            <div>
                <ul className="nav navbar-nav navbar-right">
                    <li onClick={this.openSignUp}>
                        <a>
                          <span className="glyphicon glyphicon-user" />  Sign Up
                        </a>
                    </li>

                    <li onClick={this.openLogin}>
                        <a>
                          <span className="glyphicon glyphicon-log-in" />  Login
                        </a>
                    </li>
                </ul>

                <Modal className="customclass" ref='navmodal' show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title id='ModalHeader'>{this.state.modalTitle}</Modal.Title>
                    </Modal.Header>

                <Modal.Body>
                    <ModalForm />
                </Modal.Body>
                </Modal>
            </div>
        );
    }
});

module.exports = Buttons;
