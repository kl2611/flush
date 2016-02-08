var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var SpotUtil = require('../../util/spot_util');
var SpotStore = require('../../stores/spot');
var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');
var Rating = require('./Rating');

var RandomReview = React.createClass({
    getInitialState: function() {
        return({
                    hotSpot: null,
                    reviews: null
                    });
    },

    componentDidMount: function() {
        var randSpot = Math.floor((Math.random()) * 3 + 2);
        SpotUtil.fetchSingleSpot(randSpot);
        ReviewUtil.fetchSpotReviews(randSpot);
        spotListener = SpotStore.addListener(this.onChange);
        reviewListener = ReviewStore.addListener(this.onChange);
    },

    onChange: function() {
        this.setState({
            hotSpot: SpotStore.current(),
            reviews: ReviewStore.findBySpotLimit()
        });
    },

    componentWillUnmount: function() {
        spotListener.remove();
        reviewListener.remove();
    },

    handleItemClick: function (spot) {
        this.props.history.pushState(null, "spots/" + spot.id );
    },

    render: function() {
        var hotSpot = this.state.hotSpot;
        var name;
        var rating = ReviewStore.averageRating();
        var spotLink="";
        var imgSource="";

        if (!hotSpot || isNaN(rating) || rating === 0) {
            hotSpotRating = "No rating yet!";
        } else {
            spotLink = "/spots/" + hotSpot.id;
            imgSource = hotSpot.pictures[0].source;
            name = hotSpot.name;
        }

        reviews = this.state.reviews;
        if (!reviews) {
            return <div />;
        } else {
            reviewList = reviews.map(function(review) {
                var nameDisplay = review.user.username
                var comment;
                if (review.comment.split("").length > 75) {
                    comment = review.comment.split("").slice(0, 75).join("") + "...";
                } else {
                    comment = review.comment;
                }

                return (<div key={review.id}>
                                <strong>{nameDisplay}</strong>  wrote a <b>review</b> for <strong><Link to={spotLink}>{name}</Link></strong>
                                <p />
                                {review.rating} stars, {review.date}
                                <p />
                                {comment}
                            </div>
                );
            });
        }

        return (
                    <div className="review-of-the-day">
                        <h4><strong>Review of the Day</strong></h4>
                        <img src={imgSource}
                            alt={name}
                            width="90"
                            align="left">
                        </img>

                        {reviewList}
                </div>
            );
    }
});

module.exports = RandomReview;
