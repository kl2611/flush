var React = require('react');
var ReactRouter = require('react-router');

var Spot = React.createClass({
    render: function () {
        var reviews = this.props.spot.reviews || [];
        var Link = ReactRouter.Link;
        return (
            <div>
                <ul>
                  <img height="200px" src={this.props.bench.picture_url}/>
                  <li>Rating: {this.props.bench.average_rating || "No reviews yet"}</li>
                  <li>Description: {this.props.bench.description}</li>
                  <li>Seats: {this.props.bench.seating}</li>
                  <li>Latitude: {this.props.bench.lat}</li>
                  <li>Longitude: {this.props.bench.lng}</li>
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
