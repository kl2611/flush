var React = require('react');
var Router = require('react-router');
var History = Router.History;

var BackButton = React.createClass({
  mixins: [ History ],

  render: function() {
    return (
      <button type="cancel" className="btn btn-primary" onClick={this.history.goBack}>{this.props.children}</button>
    );
  }
});

module.exports = BackButton;
