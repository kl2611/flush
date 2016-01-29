var React = require('react');
var SpotIndexItem = require('./SpotsIndexItem.js');
var RecentReviews = require('../reviews/RecentReviews');

var SpotIndex = React.createClass({
    handleItemClick: function (spot) {
        this.props.history.pushState(null, "spots/" + spot.id );
    },

    render: function() {
        return (
        <div className="recent-reviews">
          <RecentReviews />
        </div>
        );
    }
});

module.exports = SpotIndex;
