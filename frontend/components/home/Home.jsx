var React = require('react');
var Grid = require('react-bootstrap').Grid;
var HomeSearchbar = require('./HomeSearchbar');
var RecentReviews = require('../reviews/RecentReviews');
var LandingPage = require('./LandingPage');
var Footer = require('./Footer');

var Home = React.createClass({
    componentDidMount: function() {
        window.scroll(0, 100);
    },

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

                        <div className="jumbotron-img">
                            <img src="assets/flushr-logo.png" height="90" />
                        </div>
                    </div>



                </div>
            </div>

            <div className="landing-page shadow">
                    <LandingPage />
            </div>

            <Footer />
        </div>

        );
    }
});

module.exports = Home;
