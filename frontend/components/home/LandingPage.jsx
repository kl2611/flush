var React = require('react');
var Search = require('../nav/Search');
// var SpotStore = require('../../stores/spot.js');
// var SpotUtil = require('../../util/spot_util.js');
var RecentReviews = require('../reviews/RecentReviews');
var RandomReview = require('../reviews/RandomReview');
var UserInfo = require('../nav/UserInfo');

var LandingPage = React.createClass({
    render: function() {
        return (
        <div id="landing-page">

            <div className="row">
                <div className="col-md-8">
                    <div className="vertical-hr">
                    <h4>Your Next Review Awaits!</h4>
                    <RecentReviews />
                    </div>
                </div>

                <div className="col-md-4">
                    <hr />
                    <RandomReview />
                </div>

            </div>
        </div>
        );
    }
});

module.exports = LandingPage;
