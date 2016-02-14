var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewStore = require('../../stores/review');
var Review = require('../reviews/Review');

var TaggingUtil = require('../../util/tagging_util');
var TagStore = require('../../stores/tag');

var StarRating = require('./StarRating');

var Spot = React.createClass({
  mixins: [History],

  componentDidMount: function() {
    $("#spot-rating").rating({min: "0",
                                max: "5",
                                step: "0.5",
                                showClear: false,
                                showCaption: false,
                                readonly: true,
                                size: "xs"});
  },

  componentWillReceiveProps: function(newProps) {
    $("#spot-rating").rating('update', newProps.spot.average_rating);
  },

  render: function () {
    if (isNaN(this.props.spot.average_rating)) {
      ratingCount = "No rating yet!";
    } else {
      if (this.props.spot.reviews.length === 1) {
        ratingCount = this.props.spot.reviews.length + " review";
      } else {
        ratingCount = this.props.spot.reviews.length + " reviews";
      }
    }

    var spotRating = ReviewStore.averageRating();
    var reviews = this.props.spot.reviews || [];
    var Link = ReactRouter.Link;

      return (
          <div className="spot-detail">
                  <h3>{this.props.spot.name}</h3>
                    <input id={"spot-rating"} className="rating" type="number" min='1' max='5' />
                    <label><strong>{ratingCount}</strong></label>
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
