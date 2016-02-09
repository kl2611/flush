var React = require('react');
var ReactRouter = require('react-router');

var ReviewActions = require('../../actions/review_actions');
var ReviewForm = require('./ReviewsForm');
var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');

var Review = React.createClass({
  render: function () {
    return (
      <div className="spot-reviews">

        <div className="row">
          <hr />
            <div className="col-md-4"><strong>{this.props.username}</strong></div>

            <div className="col-md-8">
            <ul>
              <li>Rating: {this.props.rating}</li>
              <li>{this.props.date}</li>
              <li>{this.props.comment}</li>
            </ul>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Review;
