var React = require('react');
var ReactRouter = require('react-router');

var ReviewActions = require('../../actions/review_actions');
var ReviewForm = require('./ReviewsForm');
var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');

var Review = React.createClass({
  render: function () {
      if (this.props.avatar === undefined) {
          imgSrc = "https://res.cloudinary.com/kellyliu/image/upload/v1455063173/swirl.jpg"
      } else if (this.props.avatar.source) {
          imgSrc = this.props.avatar.source
      } else {
          imgSrc = "https://res.cloudinary.com/kellyliu/image/upload/v1455063173/swirl.jpg"
      }

    return (
      <div className="spot-reviews">

        <div className="row">
          <hr />

            <div className="col-md-3">
                <div className="img">
                  <img src={imgSrc}
                    height="90"
                    width="90"/>
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
