var React = require('react');
var Search = require('../nav/Search');
var RecentReviews = require('../reviews/RecentReviews');
var RandomReview = require('../reviews/RandomReview');

var LandingPage = React.createClass({
    render: function() {
        return (
            <div className="row">
            <h1><center>Your Next Review Awaits!</center></h1>
                <div className="col-md-8">
                    <div className="vertical-hr">

                    <RecentReviews />
                    </div>
                </div>

                <div className="col-md-4">
                    <RandomReview />
                </div>

            </div>
        );
    }
});

module.exports = LandingPage;
