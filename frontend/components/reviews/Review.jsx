var React = require('react');
var ReactRouter = require('react-router');

var ReviewActions = require('../../actions/review_actions');
var ReviewForm = require('./ReviewsForm');
var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');

var Review = React.createClass({
  render: function () {
    return (
      <div>

        <li>Rating: {this.props.rating}</li>
        <li>by: {this.props.username}</li>
        <li>{this.props.comment}</li>

      </div>
    );
  }
});

module.exports = Review;
