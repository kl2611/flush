var React = require('react');
var Grid = require('react-bootstrap').Grid;
var HomeSearchbar = require('./HomeSearchbar');
var RecentReviews = require('../reviews/RecentReviews');
var LandingPage = require('./LandingPage');

var Home = React.createClass({


    render: function() {
        return (
        <div>
            <div className="jumbotron">
                <div className="jumbotron-container">
                    <div className="jumbotron-header">
                        <h1>FIND PUBLIC RESTROOMS</h1>
                        <h2>Wherever in the world you may be.</h2>

                        <div className="jumbotron-searchbar">
                            <HomeSearchbar history={this.props.history}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-page">
                    <LandingPage />
            </div>
        </div>

        );
    }
});

module.exports = Home;
