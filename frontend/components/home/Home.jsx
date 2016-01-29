var React = require('react');
var ReactRouter = require('react-router');
var RecentReviews = require('../reviews/RecentReviews');
var ReviewUtil = require('../../util/review_util');
var ReviewStore = require('../../stores/review');
var SpotSearch = require('../spots/SpotsSearch');

var Home = React.createClass({
    getInitialState: function() {
        return ({userSpotReviews: []});
    },

    componentDidMount: function() {
        this.reviewListener = ReviewStore.addListener(this.onChange);
        ReviewUtil.fetchUserReviews(CURRENT_USER_ID);
    },

    componentWillUnmount: function() {
        this.reviewListener.remove();
    },

    onChange: function() {
        var reviews = ReviewStore.singleUserAllReviews();
        var refIds = reviews.map(function(review) {
            return {spot_id: review.spot_id,
                        review_id: review.id};
            });
        this.setState({userSpotReviews: refIds});
    },

    render: function() {
        return (
            <div id="homepage-container">
                <div className = "left-column">
                    <div className="map-container">
                        <SpotSearch />
                    </div>
                    <div className="homepage-review-form">
                        <h3>Your Next Review Awaits!</h3>
                    </div>

                    <div className="recent-activiy">
                    <RecentReviews />
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Home;
