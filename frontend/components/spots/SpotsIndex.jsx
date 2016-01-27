var React = require('react');
var SpotStore = require('../../stores/spot');
var SpotUtil = require('../../util/spot_util');
var SpotIndexItem = require('./SpotsIndexItem.js');

var SpotIndex = React.createClass({
    getInitialState: function() {
        return { spots: SpotStore.all() };
    },

    _onChange: function() {
        this.setState({ spots: SpotStore.all() });
    },

    componentDidMount: function() {
        this.spotListener = SpotStore.addListener(this._onChange);
        SpotUtil.fetchSpots();
    },

    componentWillUnmount: function() {
        this.spotListener.remove();
    },

    handleItemClick: function (spot) {
        this.props.history.pushState(null, "spots/" + spot.id );
    },

    render: function(){
        var handleItemClick = this.handleItemClick;
        return (
        <div>
            <h1>Index</h1>
            {
              this.props.spots.map(function(spot){
                var boundClick = handleItemClick.bind(null, spot);
                return <SpotIndexItem
                  onClick={boundClick}
                  spot={spot}
                  key={spot.id} />
              })
            }
          </div>
        );
    }
});

module.exports = SpotIndex;
