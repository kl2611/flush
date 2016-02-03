var React = require('react');
var Search = require('../nav/Search');
var SpotStore = require('../../stores/spot.js');
var SpotUtil = require('../../util/spot_util.js');
var RecentReviews = require('../reviews/RecentReviews');

var LandingPage = React.createClass({
    render: function() {
        return (
            <div>
                <h4>Your Next Review Awaits</h4>
                <Search history={this.props.history} />
                <p />
                <RecentReviews />
            </div>
        )
    }
});

module.exports = LandingPage;
