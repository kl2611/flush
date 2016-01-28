var React = require('react');
var ReactRouter = require('react-router');

var ReviewForm = require('./ReviewsForm');
var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');

var Review = React.createClass({
  componentDidMount: function() {
    var reviewId = "#review-rating-user-" + this.props.id;
    var that = this;
  },

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
