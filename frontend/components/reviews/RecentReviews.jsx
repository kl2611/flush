var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');
var Rating = require('./Rating');

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
        this.props.history.pushState(null, "spots/" + spot.id );
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

                return (<ul key={review.id}>
                                <li>{nameDisplay}{status}<Link to={null, "/spots/" + review.spot_name.id}>{review.spot_name.name}:</Link></li>
                                <li>{review.rating} Stars, {review.date}</li>
                                <li>{review.comment}</li>
                            </ul>);
            });
        }

        return (
            <div className ="recent-activity-container">
            <h4>Recent Activity</h4>
                {reviews}
            </div>
        );
    }
});

module.exports = RecentReviews;
