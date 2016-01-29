var React = require('react');
var ReactRouter = require('react-router');
var SpotStore = require('../../stores/spot.js');
var SpotUtil = require('../../util/spot_util.js');
var SpotsIndex = require('./SpotsIndex');
var Map = require('./Map');

function _getAllSpots() {
    return SpotStore.all();
}

var SpotsSearch = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    _spotsChanged: function() {
        this.setState({spots: _getAllSpots()});
    },

    getInitialState: function() {
        return {
            spots: _getAllSpots(),
            clickedLoc: null
        };
    },

    _onChange: function() {
        this.setState({ spots: SpotStore.all() })
    },

    componentDidMount: function() {
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

    render: function() {
        return(
                <div>
                    <h4>Your Next Review Awaits</h4>
                    <Map
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

module.exports = SpotsSearch;
