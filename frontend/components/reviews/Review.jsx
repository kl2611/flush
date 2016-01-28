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
      <ul>
        <li>Rating: {this.props.rating}</li>
        <li>{this.props.comment}</li>
      </ul>
      </div>
    );
  }
});

module.exports = Review;
