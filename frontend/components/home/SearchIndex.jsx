var React = require('react');
var ReactRouter = require('react-router');
var SpotStore = require('../../stores/spot.js');
var SpotUtil = require('../../util/spot_util.js');
var Map = require('../spots/Map2');
var Search = require('../nav/Search');
var SpotsIndex = require('../spots/SpotsIndex');

var MapStore = require('../../stores/map');


function _getAllSpots() {
    return SpotStore.all();
}

var SearchIndex = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    _spotsChanged: function() {
        this.setState({spots: _getAllSpots()});
    },

    getInitialState: function() {
        return ({
            spots: _getAllSpots(),
            //clickedLoc: null
            showResult: false
        });
    },

    _onChange: function() {
        this.setState({ spots: SpotStore.all() })
    },

    _updateMapsStatus: function() {
        if (MapStore.isReady('maps')) {
            this.mapsReadyToken.remove();
            this._startSearchProcess();
        }
    },

    _startSearchProcess: function() {
        this.geocoder = new google.maps.Geocoder();
        this._geoConverter(this.props.params.loc);
    },

    componentDidMount: function() {
        this.currentLocStr = this.props.params.loc;

        if (MapStore.isReady('maps')) {
            this._startSearchProcess();
        } else {
            this.mapsReadyToken = MapStore.addListener(this._updateMapsStatus);
        }

        this.spotListener = SpotStore.addListener(this._onChange);
        SpotUtil.fetchSpots();
    },

    componentWillUnmount: function() {
        this.spotListener.remove();
    },

    handleMapClick: function(coords) {
        this.props.history.pushState(null, "spots/new", coords);
    },

    handleMarkerClick: function (spot) {
        this.props.history.pushState(null, "spots/" + spot.id);
    },

    _geoConverter: function(locStr) {
        console.log("geoConverter called");

        var _showMaps = this._showMaps;
        this.geocoder.geocode({"address": locStr}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var latLng = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                };
                _showMaps(latLng);
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    },

    _showMaps: function(centerLatLng) {
        this.setState({
            showResult: true,
            centerLatLng: centerLatLng
        });
    },

    componentWillReceiveProps: function(newProps) {
        var newLocStr = newProps.params.loc;

        this._geoConverter(newProps.params.loc);
    },

    render: function() {
        return(
                <div>
                    <h4>Your Next Review Awaits</h4>
                    <Search history={this.props.history} /> <p />
                    <Map
                        centerLatLng = {this.state.centerLatLng}
                        onMapClick={this.handleMapClick}
                        onMarkerClick={this.handleMarkerClick}
                        spots={this.state.spots}/>
                    <div className = "map">
                        <SpotsIndex spots={this.state.spots} history={this.props.history} />
                    </div>

                </div>
        );
    }
});

module.exports = SearchIndex;
