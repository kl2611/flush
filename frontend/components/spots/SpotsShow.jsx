var React = require('react');
var ReactRouter = require('react-router');
var SpotStore = require('../../stores/spot');
var Spot = require('./Spot');
var Map = require('./Map');
var SpotUtil = require('../../util/spot_util.js');
var BackButton = require('./BackButton');

var Review = require('../reviews/Review');
var ReviewStore = require('../../stores/review');

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

    componentWillReceiveProps: function (newProps) {
        SpotUtil.fetchSingleSpot(parseInt(newProps.params.spotId));
    },

    componentWillUnmount: function () {
        this.spotListener.remove();
    },

    _spotChanged: function () {
        var spotId = this.props.params.spotId;
        var spot = this._findSpotById(spotId);

        var current_spot;
        if (SpotStore.current()) {
            current_spot = SpotStore.current();
        }

        this.setState({ spot: spot });
    },

    render: function () {
        var spots = [];
        if (this.state.spot) {
            spots.push(this.state.spot);
        }

        var spot = this.state.spot;

        var Link = ReactRouter.Link;
        var reviewURL = "/spots/" + this.state.spot.id + "/review";

        return (
        <div className="container-fluid">
            <div className="container-spots-show">
                <div className="row">

                    <div className="col-md-8">
                    <p />

                    <h7><Link to = "/search/">Check out demo search results</Link></h7>

                    <p />

                    <Spot spot={this.state.spot} className="map"/>
                    </div>

                    <div className="col-md-4">
                        <Map className="map"
                            singleSpot={true}
                            spots={spots}/>
                    </div>
                </div>
            </div>

            <div className="container-spots-show">
                {this.props.children || <button type="button" className="btn btn-default"><Link to={reviewURL}>Leave a Review</Link></button>}
            </div>
            <p />
        </div>
        );
    }
});

module.exports = SpotShow;
