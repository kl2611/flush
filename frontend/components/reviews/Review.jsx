var React = require('react');
var ReactRouter = require('react-router');

var ReviewActions = require('../../actions/review_actions');
var ReviewForm = require('./ReviewsForm');
var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');

var Review = React.createClass({
  componentDidMount: function() {
    var reviewId = "#review-rating-user-" + this.props.id;
    var that = this;
    $(reviewId).rating({min: "0",
                                max: "5",
                                step: "0.5",
                                showClear: false,
                                showCaption: false,
                                readOnly: true,
                                size: "xxs"});
    $(reviewId).rating('update', this.props.rating);
  },

  render: function () {
    var reviewId = "review-rating-user-" + this.props.id;
    var username = this.props.username;

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
              <li><input id={reviewId} className="rating" type="number" min='1' max='5' /></li>
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
