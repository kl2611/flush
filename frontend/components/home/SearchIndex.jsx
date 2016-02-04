var React = require('react');
var ReactRouter = require('react-router');
var SpotStore = require('../../stores/spot.js');
var SpotUtil = require('../../util/spot_util.js');
var SpotActions = require('../../actions/spot_actions');

var Map = require('../spots/Map');
var Search = require('../nav/Search');
var List = require('../spots/List');

var MapStore = require('../../stores/map');
var FilterStore = require('../../stores/filter_params');

function _getAllSpots() {
    return SpotStore.all();
}

function _getFilterParams() {
    return FilterStore.params();
}

var SearchIndex = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState: function() {
        return ({
            spots: _getAllSpots(),
            //showResult: false,
            clickedLoc: null,
            filterParams: _getFilterParams(),
        });
    },

    // _updateSpots: function() {
    //     this.setState({
    //         spots: SpotStore.all()
    //     });
    // },

    // _updateFilter: function() {
    //     SpotActions.fetchFilteredSpots();
    // },

    _spotsChanged: function() {
        this.setState({spots: _getAllSpots()});
    },

    _filtersChanged: function() {
        var newParams = _getFilterParams();
        this.setState({ filterParams: newParams });
        SpotUtil.fetchSpots();
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
        console.log('search process started');
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
                //console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    },

    _showMaps: function(centerLatLng) {
        this.setState({
            showResult: true,
            centerLatLng: centerLatLng
        });
    },

    componentDidMount: function() {
        this.currentLocStr = this.props.params.loc;
        console.log('component mounted')

        this.filterListener = FilterStore.addListener(this._filtersChanged);
        this.spotListener = SpotStore.addListener(this._spotsChanged);
        SpotUtil.fetchSpots();

        if (MapStore.isReady('maps')) {
            console.log('mapstore ready')
            this._startSearchProcess();
        } else {
            console.log('mapstore added listener')
            this.mapsReadyToken = MapStore.addListener(this._updateMapsStatus);
            this._startSearchProcess();
        }
    },

    componentWillReceiveProps: function(newProps) {
        var newLocStr = newProps.params.loc;
        console.log("searchIndex Received New Props" + newLocStr);

        //this.componentDidMount();
        this._geoConverter(newProps.params.loc);
    },

    componentWillUnmount: function() {
        this.spotListener.remove();
        this.filterListener.remove();
    },

    handleMapClick: function(coords) {
        this.props.history.pushState(null, "spots/new", coords);
    },

    handleMarkerClick: function (spot) {
        this.props.history.pushState(null, "spots/" + spot.id);
    },

    render: function() {
        var showResult = this.state.showResult;
        var handleItemClick = this.handleItemClick;

        return(
            <div id="results">

                <div id="results-header">
                <h4>Results</h4>
                <Search history={this.props.history} /> <p />
                </div>

                <div id="list">
                    <List spots={this.state.spots} history={this.props.history} />
                </div>


                <div id="map">
                    <Map
                        centerLatLng = {this.state.centerLatLng}
                        onMapClick={this.handleMapClick}
                        onMarkerClick={this.handleMarkerClick}
                        spots={this.state.spots}/>
                </div>
            </div>
        );
    }
});

module.exports = SearchIndex;
