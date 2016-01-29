var React = require('react');
var ReactRouter = require('react-router');

var ReviewIndex = require('../reviews/ReviewsIndex');
var ReviewStore = require('../../stores/review');
var Review = require('../reviews/Review');

var Spot = React.createClass({
    render: function () {
      var spotRating = ReviewStore.averageRating();
      var reviews = this.props.spot.reviews || [];
      var Link = ReactRouter.Link;

        return (
            <div>
                <ul>
                  <li>Rating: {this.props.spot.average_rating || "No reviews yet"}</li>
                  <li>Name: {this.props.spot.name}</li>
                  <li>Description: {this.props.spot.description}</li>
                </ul>

              <div className="reviews">
                  <h3>Reviews</h3>
                  {reviews.map(function (review) {
                    return <Review key={review.id} {...review} />;
                 })}
              </div>
            </div>
        );
    }
});

module.exports = Spot;
