var React = require('react');
var ReactRouter = require('react-router');

var History =ReactRouter.History;
var Link = ReactRouter.Link;

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var SpotIndexItem = React.createClass({
    mixins: [History],

    getInitialState: function() {
        return  { avg: "No rating yet!", reviewCount: 0} ;
    },

    showDetail: function() {
        this.history.pushState(null, 'spot/' + this.props.spot.id, {});
    },

    render: function() {
        var spot = this.props.spot;
        return (
            <div className="spot-index-item" onClick={this.props.onClick}>
                {spot.description}
                <br />
                Rating: {spot.average_rating || "No reviews yet"}
                <br />
                <img src={spot.picture_url} />
            </div>
        );
    }
});

module.exports = SpotIndexItem;
