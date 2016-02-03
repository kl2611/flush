var React = require('react');
var ListItemDetail = require('./ListItemDetail');

var ListItem = React.createClass({
    handleClick: function() {
        var spotId = this.props.spot.id;
        this.props.history.pushState(null, "spots/" + spotId);
    },

    render: function() {
        var spot = this.props.spot;
        return (
            <div>
                <div id={"spot-" + spot.id}>
                    <ListItemDetail handleClick={this.handleClick} spot={spot} />
                </div>
            </div>
        )
    }
});

module.exports = ListItem;
