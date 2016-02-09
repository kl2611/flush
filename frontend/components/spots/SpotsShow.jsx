var React = require('react');
var ReactRouter = require('react-router');
var SpotStore = require('../../stores/spot');
var Spot = require('./Spot');
var Map = require('./Map');
var SpotUtil = require('../../util/spot_util.js');

var Review = require('../reviews/Review');

var SpotShow = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState: function() {
        var spotId = this.props.params.spotId;
        var spot = this._findSpotById(spotId) || {} ;
        return { spot: spot };
    },

    _findSpotById: function(id) {
        var res;
            SpotStore.all().forEach(function (spot) {
                if (id == spot.id ) {
                    res = spot;
                }
            }.bind(this));
              return res;
    },

    componentDidMount: function() {
        this.spotListener = SpotStore.addListener(this._spotChanged);
        SpotUtil.fetchSpots();
    },

    componentWillUnmount: function () {
        this.spotListener.remove();
    },

    _spotChanged: function () {
        var spotId = this.props.params.spotId;
        var spot = this._findSpotById(spotId);
        this.setState({ spot: spot });
    },

    render: function () {
        var spots = [];
        if (this.state.spot) {
            spots.push(this.state.spot);
        }

        var Link = ReactRouter.Link;
        var reviewURL = "/spots/" + this.state.spot.id + "/review";

        return (
            <div className="spots-reviews">

                <Link to = "/">Back to Restrooms Index</Link>

                <Map className="map"
                    singleSpot={true}
                    spots={spots}
                    onMapClick={this.handleMapClick} />
                <Spot spot={this.state.spot} className="map"/>

                <div className="review-form">
                {
                    this.props.children ||
                        <Link to={reviewURL}>Leave a Review</Link>
                }
                </div>
            </div>
        );
    }
});

module.exports = SpotShow;
