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
                    randSpot: null,
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
            randSpot: SpotStore.current(),
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
        var randSpot = this.state.randSpot;
        var name;
        var rating = ReviewStore.averageRating();
        var spotLink="";
        var imgSource="";

        if (!randSpot || isNaN(rating) || rating === 0) {
            randSpotRating = "No rating yet!";
        } else if (randSpot.pictures[0] === undefined) {
            spotLink = "/spots/" + randSpot.id;
            imgSource = "assets/icon-default.jpg"
            name = randSpot.name;
        } else {
            spotLink = "/spots/" + randSpot.id;
            imgSource = randSpot.pictures[0].source;
            name = randSpot.name;
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

                return (
                            <div key={review.id}>
                                <hr />
                                <strong>{nameDisplay}</strong>  wrote a <b>review</b> for <strong><Link to={spotLink}>{name}</Link></strong>
                                <p />
                                {review.rating} stars, {review.date}
                                <p />
                                <div className="list-item-description"><blockquote>{comment}</blockquote></div>
                            </div>
                );
            });
        }

        return (
                <div className="review-of-the-day">
                    <h4>Reviews of the Day</h4>
                    <hr />
                    <div className="wrapper">
                        <img src={imgSource}
                            alt={name}
                            height="150" />
                    </div>
                    {reviewList}
                </div>
            );
    }
});

module.exports = RandomReview;
