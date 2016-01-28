var React = require('react');
var ReactRouter = require('react-router');


var Review = require('../reviews/Review');
var ReviewStore = require('../../stores/review');

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
                  <li>Latitude: {this.props.spot.lat}</li>
                  <li>Longitude: {this.props.spot.lng}</li>
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
