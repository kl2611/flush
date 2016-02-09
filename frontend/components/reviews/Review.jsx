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
            <div className="col-md-3">
              <div className="user-info-center">
                <img src={this.props.avatar.source}
                  height="90"
                  width="90">
                </img>
                <br />
                <div className="username">{this.props.username}</div>
                </div>
            </div>

            <div className="col-md-9">
            <ul>
              <li>Rating: {this.props.rating}</li>
              <li>{this.props.comment}</li>
            </ul>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Review;
