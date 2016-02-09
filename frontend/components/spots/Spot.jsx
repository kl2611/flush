var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewIndex = require('../reviews/ReviewsIndex');
var ReviewStore = require('../../stores/review');
var Review = require('../reviews/Review');

var TaggingUtil = require('../../util/tagging_util');
var TagStore = require('../../stores/tag');

var Spot = React.createClass({
  mixins: [History],

  render: function () {
    var spotRating = ReviewStore.averageRating();
    var reviews = this.props.spot.reviews || [];
    var Link = ReactRouter.Link;

      return (
          <div id="spot-detail">
                  <h3>{this.props.spot.name}</h3>
                  <li>Rating: {this.props.spot.average_rating || "No reviews yet"}</li>
                  <li>Description: {this.props.spot.description}</li>


              <div className="reviews">
                  <h3>Reviews</h3>
                  {reviews.map(function (review) {
                    return (
                        <Review key={review.id} {...review} />);
                 })}
                  <p />
              </div>
            </div>
      );
  }
});

module.exports = Spot;
