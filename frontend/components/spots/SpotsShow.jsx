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
        console.log("did component mount");
        this.spotListener = SpotStore.addListener(this.onChange);
        SpotUtil.fetchSingleSpot(parseInt(this.props.params.spotId));
    },

    componentWillUnmount: function () {
        this.spotListener.remove();
    },

    componentWillReceiveProps: function(newProps) {
        SpotUtil.fetchSingleSpot(parseInt(newProps.params.spotId));
    },

    onChange: function() {
        var spotId = parseInt(this.props.params.spotId);
        var current_spot;
        if (SpotStore.current()) {
            current_spot = SpotStore.current();
        }

        this.setState({
            spot: current_spot
        });
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
        var locStr = this.props.params.loc;

        return (
        <div className="container-fluid">
            <div className="container-spots-show">

                <div className="row">
                    <div className="col-md-8">
                        <p />
                        <h5><Link to = "/search/">Back to Search Results</Link></h5>

                        <Spot spot={this.state.spot} className="map"/>
                    </div>

                    <div className="col-md-4">
                        <Map className="map"
                            singleSpot={true}
                            spots={spots}
                            onMapClick={this.handleMapClick} />
                    </div>
                </div>
            </div>

            <div className="container-spots-show">
                {this.props.children || <Link to={reviewURL}>Leave a Review</Link>}
            </div>
            <p />
        </div>
        );
    }
});

module.exports = SpotShow;
