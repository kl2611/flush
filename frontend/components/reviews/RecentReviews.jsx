var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');
var Rating = require('./Rating');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var RecentReviews = React.createClass({
    getInitialState: function() {
        return { recentReviews: [] };
    },

    componentDidMount: function() {
        this.reviewListener = ReviewStore.addListener(this.onChange);
        ReviewUtil.fetchRecentReviews(6);
    },

    onChange: function() {
        this.setState({ recentReviews: ReviewStore.recentReviews() });
    },

    componentWillUnmount: function() {
        this.reviewListener.remove();
    },

    handleItemClick: function (spot) {
        setTimeout(this.props.history.pushState(null, "spots/" + spot.id ), 1500);
    },

    render: function() {
        var handleItemClick = this.handleItemClick;

        if (this.state.recentReviews.length === 0) {
              reviews = <div />;
        } else {
            reviews = this.state.recentReviews.map(function(review) {
                var spotLink = "/spots/" + review.spot_name.id;
                var rating = review.rating;
                var username = review.user.username;
                var nameDisplay = <strong>{username}</strong>;
                var status = " wrote a review for ";

                if (review.user.avatar === undefined) {
                    imgSrc = "https://res.cloudinary.com/kellyliu/image/upload/v1455063173/swirl.jpg"
                } else if (review.user.avatar.source) {
                    imgSrc = review.user.avatar.source
                } else {
                    imgSrc = "https://res.cloudinary.com/kellyliu/image/upload/v1455063173/swirl.jpg"
                }

                return (
                            <ul key={review.id}>
                            <hr />
                            <img src={imgSrc}
                              height="90"
                              width="90"
                              className="img" />
                                <li>{nameDisplay}{status}<Link to={spotLink}>{review.spot_name.name}:</Link></li>
                                <li>{review.rating} Stars, {review.date}</li>
                                <li>{review.comment}</li>
                                <br />
                            </ul>);
            });
        }

        return (
            <div className ="recent-reviews">
            <h3 className="recent-reviews">Recent Activity</h3>
                {reviews}
            </div>
        );
    }
});

module.exports = RecentReviews;
