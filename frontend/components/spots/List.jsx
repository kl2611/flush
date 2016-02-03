var React = require('react');
var ListItem = require('./ListItem');

var List = React.createClass({
    render: function() {
        var spots = this.props.spots;
        var history = this.props.history;
        var listItems = Object.keys(spots).map(function(spot_id) {
            return (
                <ListItem
                    key={spot_id}
                    spot={spots[spot_id]}
                    history={history}/>);
        });

        var redirectPrompt = (
            <h4>This demo currently only contains sample data in Morningside Heights, NYC</h4>
        );

        return (
            <div>
                {listItems.length > 0 ? listItems: redirectPrompt}
            </div>
        )
    }

});

module.exports = List;
