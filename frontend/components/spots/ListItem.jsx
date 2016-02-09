var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var SpotUtil = require('../../util/spot_util');
var SpotStore = require('../../stores/spot');
var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var ListItem = React.createClass({
  mixins: [ReactRouter.history],

  handleItemClick: function (spot) {
    this.props.history.pushState(null, "spots/" + spot.id );
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
  },

  onChange: function() {
    this.spotReviews = ReviewStore.spotReviewsFromAll(this.props.spot.id)

    this.setState({
      reviewCount: this.spotReviews.length
    });
  },

  componentWillUnmount: function() {
      this.spotListener.remove();
      this.reviewListener.remove();
  },

  render: function(){
    var spot = this.props.spot;

    var spotImg;
    if (!this.props.spot) {
      spotImg = <div />
    } else {
      var mainPic = this.props.spot.pictures[0];
      if (mainPic) {
        var imgSource = mainPic.source;
        spotImg = <img key={mainPic.id} src={imgSource} width="100" height="100" />
      }
    }

    var taggings = this.props.spot.taggings;

    if(taggings.length === 0) {
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
    // var imgSource = spot.pictures[0].source;

    return (
      <div>
          <hr />
          <div>
              {spotImg}
              <li><b><Link to={null, "spots/" + spot.id}>{spot.name}</Link></b></li>
              <li>Rating: {spot.average_rating || "No reviews yet"} {reviewCount} Reviews</li>
              <li><ul className="list-unstyled list-inline tag-list">{taggingList}</ul></li>
          </div>
      <div className="list-item-description">{spot.description}</div>
      </div>
    );
  }
});

module.exports = ListItem;
