var React = require('react');
var SpotIndexItem = require('./SpotsIndexItem.js');
//var ReviewIndexItem = require('../reviews/ReviewsIndexItem');

var SpotIndex = React.createClass({
    handleItemClick: function (spot) {
        this.props.history.pushState(null, "spots/" + spot.id );
    },

    render: function(){
        var handleItemClick = this.handleItemClick;
        return (
        <div>
            <h3>Recent Reviews</h3>
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
