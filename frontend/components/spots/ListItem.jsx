var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var SpotUtil = require('../../util/spot_util');
var SpotStore = require('../../stores/spot');
var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');
var ListItemRating = require('./ListItemRating');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var ListItem = React.createClass({
  mixins: [ReactRouter.History],

  handleItemClick: function (spot) {
    this.history.pushState(null, "spots/" + spot.id);
  },

  getInitialState: function() {
    return ({
      reviewCount: 0
    });
  },

  componentDidMount: function() {
    this.spotListener = SpotStore.addListener(this.onChange);
    this.reviewListener = ReviewStore.addListener(this.onChange);
    ReviewUtil.fetchReviews();

    $("#spot-rating").rating({min: "0",
                                max: "5",
                                step: "0.5",
                                showClear: false,
                                showCaption: false,
                                readonly: true,
                                size: "xxs"});
  },

  onChange: function() {
    this.spotReviews = ReviewStore.spotReviewsFromAll(this.props.spot.id)

    this.setState({
      reviewCount: this.spotReviews.length
    });
  },

  componentWillReceiveProps: function(newProps) {
    $("#spot-rating").rating('update', newProps.spot.average_rating);
  },

  componentWillUnmount: function() {
      this.spotListener.remove();
      this.reviewListener.remove();
  },

  render: function(){
    var spot = this.props.spot;

    var spotImg;

    if (this.props.spot.pictures === undefined) {
      spotImg = <img src="https://res.cloudinary.com/kellyliu/image/upload/v1455005227/icon-default2_hxc6mt.jpg" width="100" height="100" />
    } else if (this.props.spot.pictures[0]) {
      var mainPic = this.props.spot.pictures[0];
      var imgSource = mainPic.source;
      spotImg = <img key={mainPic.id} src={imgSource} width="100" height="100" />
    } else {
      spotImg = <img src="https://res.cloudinary.com/kellyliu/image/upload/v1455005227/icon-default2_hxc6mt.jpg" width="100" height="100" />
    }

    var taggings = this.props.spot.taggings;

    if(taggings === undefined || taggings.length === 0) {
      taggingList = <li></li>;
    } else {
      taggingList = taggings.map(function(tagging, idx){
        return(
          <li key={tagging.tag_id}>
          {tagging.name.capitalizeFirstLetter()}
          </li>);
      });
    }

    var reviewCount = this.state.reviewCount;

    return (
      <div>
          <hr />
          <div className="list-img">
              {spotImg}
          </div>
              <li><b><Link to={null, "/spots/" + spot.id}>{spot.name}</Link></b></li>
              <li><ListItemRating spotId={spot.id} rating={spot.average_rating} reviewCount={reviewCount} /></li>
              <li><ul className="list-unstyled list-inline tag-list">{taggingList}</ul></li>

      <div className="list-item-description">{spot.description}</div>
      </div>
    );
  }
});

module.exports = ListItem;
