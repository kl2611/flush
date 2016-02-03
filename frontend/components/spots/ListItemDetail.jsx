var React = require('react');
var History =ReactRouter.History;
var Link = ReactRouter.Link;

var ListItemDetail = React.createClass({
    mixins: [History],

    render: function() {
        var spot = this.props.spot;

        return (
            <div className="spot-index-item" onClick={this.props.onClick}>
                {spot.name}
                <br />
                {spot.description}
                <br />
                Rating: {spot.average_rating || "No reviews yet"}
                <br />
                <img src={spot.picture_url} />
            </div>
    }

});

module.exports = ListItemDetail;
