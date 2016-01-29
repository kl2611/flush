var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ReviewStore = require('../../stores/review');
var ReviewUtil = require('../../util/review_util');

var RecentReviews = React.createClass({
    getInitialState: function() {
        return { recentReviews: [] };
    },

    componentDidMount: function() {
        this.reviewListener = ReviewStore.addListener(this.onChange);
        ReviewUtil.fetchRecentReviews(5);
    },

    onChange: function() {
        this.setState({ recentReviews: ReviewStore.recentReviews() });
    },

    componentWillUnmount: function() {
        this.reviewListener.remove();
    },

    render: function() {
        if (this.state.recentReviews.length === 0) {
              reviews = <div />;
        } else {
            reviews = this.state.recentReviews.map(function(review) {
                var spotLink = "/spots/" + review.spot_name.id;
                var username = review.user.username;
                var nameDisplay = <strong>{username}</strong>;
                var status = " wrote a review for ";

                return <ul key={review.id}>
                    <li>
                        <ul className = "recent-reviews">
                            <li>{nameDisplay}{status}<Link to={spotLink}>{review.spot_name.name}:</Link></li>
                            <li>
                            <div>{review.date}</div></li>
                            <li>{review.comment}</li>
                        </ul>
                    </li>
                </ul>;
            });
        }

        return (
            <div>
            <h4>Recent Reviews</h4>
                {reviews}
            </div>
        );
    }
});

module.exports = RecentReviews;
