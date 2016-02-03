var React = require('react');
var ReactRouter = require('react-router');
var SpotStore = require('../../stores/spot.js');
var SpotUtil = require('../../util/spot_util.js');
var SpotActions = require('../../actions/spot_actions');

var Map = require('../spots/Map2');
var Search = require('../nav/Search');
var SpotsIndex = require('../spots/SpotsIndex');

var MapStore = require('../../stores/map');
var FilterStore = require('../../stores/filter_params');
var FilterActions = require('../../actions/filter_actions');

function _getAllSpots() {
    return SpotStore.all();
}

var SearchIndex = React.createClass({
    getInitialState: function() {
        return ({
            spots: SpotStore.all(),
            showResult: false
        });
    },

    _updateSpots: function() {
        this.setState({
            spots: SpotStore.all()
        });
    },

    // _updateFilter: function() {
    //     SpotActions.fetchFilteredSpots();
    // },

    _spotsChanged: function() {
        this.setState({spots: _getAllSpots()});
    },

    // getInitialState: function() {
    //     return ({
    //         spots: _getAllSpots(),
    //         //clickedLoc: null
    //         showResult: false
    //     });
    // },

    // _onChange: function() {
    //     this.setState({ spots: SpotStore.all() })
    // },

    _updateMapsStatus: function() {
        if (MapStore.isReady('maps')) {
            this.mapsReadyToken.remove();
            this._startSearchProcess();
        }
    },

    _startSearchProcess: function() {
        console.log('search process started')
        this.geocoder = new google.maps.Geocoder();
        this._geoConverter(this.props.params.loc);
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

        this._geoConverter(newLocStr);
    },

    componentWillUnmount: function() {
        // this.spotListener.remove();
        this.spotToken.remove();
        // this.filterToken.remove();
    },

    componentDidMount: function() {
        this.currentLocStr = this.props.params.loc;

        if (MapStore.isReady('maps')) {
            this._startSearchProcess();
        } else {
            this.mapsReadyToken = MapStore.addListener(this._updateMapsStatus);
        }
        this.spotToken = SpotStore.addListener(this._updateSpots);
        // this.filterToken = FilterStore.addListener(this._updateFilter);

        // this.spotListener = SpotStore.addListener(this._onChange);
        // SpotUtil.fetchSpots();
    },

    handleMapClick: function(coords) {
        this.props.history.pushState(null, "spots/new", coords);
    },

    handleMarkerClick: function (spot) {
        this.props.history.pushState(null, "spots/" + spot.id);
    },

    render: function() {
        var showResult = this.state.showResult;

        return(
            <div>
                <h4>Results</h4>
                <Search history={this.props.history} /> <p />
                <Map
                    centerLatLng = {this.state.centerLatLng}
                    onMapClick={this.handleMapClick}
                    onMarkerClick={this.handleMarkerClick}
                    spots={this.state.spots}/>
            </div>
        );
    }
});

module.exports = SearchIndex;
