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
        render: function() {
            return(
            <div>
                <h4>Map</h4>
                <div className="map">
                    <Index spots={this.state.spots} history={this.props.history} />
                </div>
            </div>
            )
        }
})

module.exports = SpotsSearch;
